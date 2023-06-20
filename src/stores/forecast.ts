import {defineStore} from "pinia";
import {HourModel} from "@/models/HourModel";
import {computed, reactive} from "vue";
import type {DayModel} from "@/models/DayModel";
import {getCurrentData} from "@/services/tomorrow";
import {CurrentModel} from "@/models/CurrentModel";

export const useForecastStore = defineStore('forecast', () => {
    const hourly: HourModel[] = reactive(new Array<HourModel>())
    const daily: DayModel[] = reactive(new Array<DayModel>())
    const current: CurrentModel = reactive(new CurrentModel)

    const color = computed(() => {
        let colorString = '#';
        const minimum = -20;
        const maximum = 110;
        const range = maximum - minimum;
        const redStart = 0x00;
        const redEnd = 0xFF;
        const greenStart = 0x00;
        const greenEnd = 0x00;
        const blueStart = 0xFF;
        const blueEnd = 0x00;

        let temp = current.temperature ?? 0;
        if (temp < minimum) {
            temp = minimum;
        }

        if (temp > maximum){
            temp = maximum;
        }

        const red = Math.round(redStart - ((redStart-redEnd)/(range))*(temp-minimum));
        const green = Math.round(greenStart - ((greenStart-greenEnd)/(range))*(temp-minimum));
        const blue = Math.round(blueStart - ((blueStart-blueEnd)/(range))*(temp-minimum));

        colorString += ('0' + red.toString(16)).substr(-2);
        colorString += ('0' + green.toString(16)).substr(-2);
        colorString += ('0' + blue.toString(16)).substr(-2);

        return colorString;
    })

    function loadWeather() {
        // const response = await getCurrentData()
        const response = JSON.parse('{"data":{"timelines":[{"timestep":"current","endTime":"2023-06-05T08:07:00-03:00","startTime":"2023-06-05T08:07:00-03:00","intervals":[{"startTime":"2023-06-05T08:07:00-03:00","values":{"cloudCover":100,"humidity":95,"precipitationIntensity":1.63,"precipitationProbability":99,"precipitationType":1,"temperature":10.5,"temperatureApparent":10.5,"weatherCode":4200,"windDirection":47,"windGust":6,"windSpeed":2.63}}]}]}}')
        current.fillFromResponse(response)
    }

    return { hourly, daily, current, color, loadWeather }
})