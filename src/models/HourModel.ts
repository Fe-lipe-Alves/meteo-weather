import type {Moment} from "moment/moment";

export class HourModel {
    time?: Moment
    cloudBase?: number
    cloudCeiling?: number
    cloudCover?: number
    dewPoint?: number
    evapotranspiration?: number
    freezingRainIntensity?: number
    humidity?: number
    iceAccumulation?: number
    iceAccumulationLwe?: number
    precipitationProbability?: number
    pressureSurfaceLevel?: number
    rainAccumulation?: number
    rainAccumulationLwe?: number
    rainIntensity?: number
    sleetAccumulation?: number
    sleetAccumulationLwe?: number
    sleetIntensity?: number
    snowAccumulation?: number
    snowAccumulationLwe?: number
    snowIntensity?: number
    temperature?: number
    temperatureApparent?: number
    uvHealthConcern?: number
    uvIndex?: number
    visibility?: number
    weatherCode?: number
    windDirection?: number
    windGust?: number
    windSpeed?: number
}