import {defineStore, storeToRefs} from 'pinia'
import {HourModel} from '@/models/HourModel'
import {reactive, ref} from 'vue'
import {CurrentModel} from '@/models/CurrentModel'
import {getForecastData} from '@/services/tomorrow'
import {DayModel} from '@/models/DayModel'
import {useGlobalStore} from "@/stores/globalStore";
import moment from "moment/moment";

export const useForecastStore = defineStore('forecast', () => {
  const useGlobal = useGlobalStore()
  const {error} = storeToRefs(useGlobal)

  const timelines = reactive({
    hours: new Array<HourModel>(),
    days: new Array<DayModel>(),
    current: new CurrentModel(),
  })

  const loading = ref<boolean>(false)

  async function load(latitude: number, longitude: number, timezone: string) {
    let forecast;

    const storage = localStorage ? JSON.parse(localStorage.getItem('forecast') as string ) : {}

    if (storage && moment().diff(storage.current.startTime, 'hours') !== 0) {
      console.log('forecast -> localStorage')
      forecast = storage
    } else {
      console.log('forecast -> api')
      forecast = await getForecastData(latitude, longitude, timezone)
      localStorage.setItem('forecast', JSON.stringify(forecast))
    }

    if (forecast) {
      timelines.current = new CurrentModel(forecast.current)

      timelines.hours.splice(0, timelines.hours.length)
      timelines.days.splice(0, timelines.days.length)

      forecast.hourly.map((hour: HourModel) => timelines.hours.push(new HourModel(hour)))
      forecast.daily.map((day: DayModel) => timelines.days.push(new DayModel(day)))

      useGlobal.changeHeaderPage()
    } else {
      error.value = true
    }
  }

  return { timelines, loading,  load }
})
