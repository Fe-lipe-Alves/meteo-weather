import {defineStore} from 'pinia'
import {reactive} from 'vue'
import {consultInfoIp} from '@/services/consultInfoIp'
import {LocationModel} from "@/models/LocationModel";
import {currentTimezone, offsetToTimezone} from "@/utilities/helpers";
// @ts-ignore
import {} from "googlemaps"
import _ from "lodash";

export const useLocationStore = defineStore('location', () => {
  const location = reactive(new LocationModel())
  const autocompleteOptions = reactive<{ description: string, id: string }[]>([])

  async function loadFromIp() {
    const response = await consultInfoIp()

    const [lat, lon] = response.loc.split(',').map(Number)

    location.address = `${response.city}, ${response.region}, ${response.country}`
    location.latitude = lat
    location.longitude = lon
    location.timezone = response.timezone
  }

  async function searchAutocomplete(input: string) {
    const displaySuggestions = function (
      predictions: google.maps.places.QueryAutocompletePrediction[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) {
      if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
        return
      }

      clearAutocomplete()
      predictions.forEach((prediction) => {
        autocompleteOptions.push({
          description: prediction.description,
          id: prediction.place_id
        })
      })
    }

    const service = await new google.maps.places.AutocompleteService();

    service.getQueryPredictions({input}, displaySuggestions);
  }

  function clearAutocomplete() {
    autocompleteOptions.splice(0, autocompleteOptions.length)
  }

  async function searchLocation(id: string) {
    const handleResults = function (
      results: google.maps.places.PlaceResult | null,
      status: google.maps.places.PlacesServiceStatus
    ) {
      if (status != google.maps.places.PlacesServiceStatus.OK || !results) {
        return
      }

      fillLocation(results)
    }

    const service = await new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({placeId: id}, handleResults);
  }

  async function getLocationFromCoordinates(lat: number, lon: number) {
    const handleResult = function (
      results: google.maps.GeocoderResult[] | null,
      status: google.maps.GeocoderStatus
    ) {
      if (status != google.maps.GeocoderStatus.OK || !results) {
        return
      }
      const typeLocation = ['locality', 'political']

      const resultsFiltered = results.filter(result => _.isEqual(typeLocation, result.types))

      fillLocation(resultsFiltered[0])
    }
    const service = await new google.maps.Geocoder()
    service.geocode({location: {lat, lng: lon}}, handleResult)
  }

  function fillLocation(response: google.maps.GeocoderResult | google.maps.places.PlaceResult) {
    if (response.formatted_address && response.geometry && response.geometry) {
      location.address = response.formatted_address
      location.longitude = response.geometry?.location.lng()
      location.latitude = response.geometry?.location.lat()

      if ("utc_offset_minutes" in response && response.utc_offset_minutes) {
        location.timezone = offsetToTimezone(response.utc_offset_minutes)
      } else {
        location.timezone = currentTimezone()
      }
    }
  }

  return {
    location,
    autocompleteOptions,
    loadFromIp,
    searchAutocomplete,
    clearAutocomplete,
    searchLocation,
    getLocationFromCoordinates
  }
})
