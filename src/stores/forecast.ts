import {defineStore} from "pinia";
import {HourModel} from "@/models/HourModel";
import {computed, reactive} from "vue";
import type {DayModel} from "@/models/DayModel";
import {CurrentModel} from "@/models/CurrentModel";
import {dataCurrentResponse} from "@/data/data-current-response";

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
        current.fillFromResponse(dataCurrentResponse)
    }

    return { hourly, daily, current, color, loadWeather }
})