import {defineStore, storeToRefs} from 'pinia'
import {HourModel} from '@/models/HourModel'
import {reactive, ref, toRaw, watch} from 'vue'
import {CurrentModel} from '@/models/CurrentModel'
import {getForecastData} from '@/services/tomorrow'
import {DayModel} from '@/models/DayModel'
import {useGlobalStore} from "@/stores/globalStore";
import moment from "moment/moment";
import {useLocationStore} from "@/stores/locationStore";
import {useUnsplashStore} from "@/stores/unsplashStore";

export const useForecastStore = defineStore('forecast', () => {
  const useGlobal = useGlobalStore()
  const {error} = storeToRefs(useGlobal)
  const useLocation = useLocationStore()
  const {location} = storeToRefs(useLocation)
  const useUnsplash = useUnsplashStore()

  const timelines = reactive({
    hours: new Array<HourModel>(),
    days: new Array<DayModel>(),
    current: new CurrentModel(),
  })

  watch(() => Object.assign({}, location.value), async() => {
    await load(location.value.latitude, location.value.longitude, location.value.timezone)
    await useUnsplash.load(timelines.current.description)
    loading.value = false
  })

  const loading = ref<boolean>(false)

  async function load(latitude: number, longitude: number, timezone: string) {
    let forecast;

    const storage = localStorage ? JSON.parse(localStorage.getItem('forecast') as string ) : {}

    if (
      storage
      && moment().diff(moment(storage.current.startTime), 'hours') === 0
      && storage.location
      && storage.location.latitude === latitude
      && storage.location.longitude === longitude
      && storage.location.timezone === timezone
    ) {
      forecast = storage
      Object.assign(location.value, storage.location)
    } else {
      forecast = await getForecastData(latitude, longitude, timezone)
      localStorage.setItem('forecast', JSON.stringify({...forecast, location: toRaw(useLocation.location)}))
    }

    if (forecast) {
      timelines.current = new CurrentModel(forecast.current)

      timelines.hours.splice(0, timelines.hours.length)
      timelines.days.splice(0, timelines.days.length)

      forecast.hourly.map((hour: HourModel) => timelines.hours.push(new HourModel(hour)))
      forecast.daily.map((day: DayModel) => timelines.days.push(new DayModel(day)))
    } else {
      error.value = true
    }
  }

  return { timelines, loading,  load }
})
