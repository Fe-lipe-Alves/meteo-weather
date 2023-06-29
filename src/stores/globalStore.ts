import {defineStore, storeToRefs} from "pinia";
import {ref} from "vue";
import {useForecastStore} from "@/stores/forecastStore";
import {pathToIcon} from "@/utilities/helpers";

export const useGlobalStore = defineStore('global', () => {
  const useForecast = useForecastStore()
  const {timelines} = storeToRefs(useForecast)

  const loading = ref(false)
  const error = ref(false)

  async function searchForecast(latitude: number, longitude: number, timezone: string) {
    await useForecast.load(latitude, longitude, timezone)
  }

  function changeHeaderPage() {
    const current = timelines.value.current
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");

    if (link) {
      link.href = pathToIcon(current.weatherCode, current)
    }

    document.title = current.description + ' - MeteoWeather'
  }

  function sunMoon(interval: any) {
    return interval.startTime?.isBetween(interval.sunriseTime, interval.sunsetTime) ? 0 : 1
  }

  return {loading, error, searchForecast, changeHeaderPage, sunMoon}
})