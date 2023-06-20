import type {Moment} from "moment/moment";
import moment from "moment/moment";
import {descriptions} from "@/data/weather-code";
import type {TomorrowResponseType} from "@/types/tomorrowResponseType";

export class CurrentModel {
    public startTime?: Moment;
    public cloudCover?: number
    public humidity?: number
    public precipitationIntensity?: number
    public precipitationProbability?: number
    public precipitationType?: number
    public temperature?: number
    public temperatureApparent?: number
    public weatherCode?: number
    public windDirection?: number
    public windGust?: number
    public windSpeed?: number
    public description?: string

    public fillFromResponse(response: TomorrowResponseType) {
        const data = response.data.timelines
            .filter(timeline => timeline.timestep === 'current')[0]

        this.startTime = moment(data.startTime)
        Object.assign(this, data.intervals[0].values);

        if (this.weatherCode) {
            this.description = descriptions[this.weatherCode]
        }
    }
}