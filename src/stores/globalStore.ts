import {defineStore, storeToRefs} from "pinia";
import {computed, ref} from "vue";
import {useForecastStore} from "@/stores/forecastStore";
import type {IntervalType} from "@/types/IntervalType";

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
      const code = current.weatherCode
      const dontExists = [1001, 4000, 4200]
      const sunMoon = (current.startTime?.isBetween(current.sunriseTime, current.sunsetTime)
        || dontExists.indexOf(code) > -1) ? 0 : 1
      link.href = `/tomorrow-icons/v2/small/png/${code}${sunMoon}_small.png`;
    }

    document.title = current.description + ' - MeteoWeather'
  }

  function sunMoon(interval: any) {
    return interval.startTime?.isBetween(interval.sunriseTime, interval.sunsetTime) ? 0 : 1
  }

  return {loading, error, searchForecast, changeHeaderPage, sunMoon}
})