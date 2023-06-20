import {descriptions} from "@/data/weather-code";
import moment from "moment/moment";
import type {Moment} from "moment/moment";

export abstract class ForecastModel {
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

    public constructor(data: any) {
        Object.assign(this, data);

        this.startTime = moment(data.startTime)

        if (this.weatherCode) {
            this.description = descriptions[this.weatherCode]
        }
    }
}