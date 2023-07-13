import {ForecastModel} from "@/models/ForecastModel";
import moment from "moment-timezone";

export function pathToIcon(
  code: number,
  sunMoon: ForecastModel|0|1,
  size: 'small'|'large' = 'small',
  resolution: '@1x'|'@2x'|'' = ''
): string
{
  const dontExists = [1001, 4000, 4001, 4200]

  if (sunMoon instanceof ForecastModel) {
    sunMoon = sunMoon.startTime?.isBetween(sunMoon.sunriseTime, sunMoon.sunsetTime) ? 0 : 1
  }

  if (dontExists.indexOf(code) > -1) {
    sunMoon = 0
  }

  if (resolution === '@1x') {
    resolution = ''
  }

  return import.meta.env.BASE_URL + `/tomorrow-icons/v2/${size}/png/${code}${sunMoon}_${size}${resolution}.png`;
}

export function offsetToTimezone(offset: number) {
  const fullOffset = moment().utcOffset(offset / 60  +':00').format('Z')
  const getZoneFromOffset = (offsetString: string) => moment.tz.names().filter(tz => moment.tz(tz).format('Z') === offsetString)
  return getZoneFromOffset(fullOffset)[0]
}

export function currentTimezone() {
  return moment.tz.guess()
}