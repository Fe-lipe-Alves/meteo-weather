import {defineStore} from "pinia";
import {ref} from "vue";
import {useForecastStore} from "@/stores/forecastStore";

export const useGlobalStore = defineStore('global', () => {
  const useForecast = useForecastStore()

  const loading = ref(false)
  const error = ref(false)

  async function searchForecast(latitude: number, longitude: number, timezone: string) {
    await useForecast.load(latitude, longitude, timezone)
  }

  function sunMoon(interval: any) {
    return interval.startTime?.isBetween(interval.sunriseTime, interval.sunsetTime) ? 0 : 1
  }

  return {loading, error, searchForecast, sunMoon}
})