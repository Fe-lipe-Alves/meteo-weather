import {CurrentModel} from "@/models/CurrentModel";
import {HourModel} from "@/models/HourModel";
import {DayModel} from "@/models/DayModel";
import {dataCurrentResponse} from "@/data/data-current-response";

const postTimelinesURL = 'https://api.tomorrow.io/v4/timelines'
const apiKey = 'woUIhYHlbBiFaLX311Rv8NU0QmXC0MsP'

async function request(body: Object) {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Accept-Encoding': 'gzip',
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    return await fetch(`${postTimelinesURL}?apikey=${apiKey}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export async function getCurrentData() {
    const fields = [
        'precipitationIntensity',
        'precipitationType',
        'windSpeed',
        'windGust',
        'windDirection',
        'temperature',
        'temperatureApparent',
        'cloudCover',
        'humidity',
        'precipitationProbability',
        'weatherCode',
    ]

    return await request({
        location: '42.3478, -71.0466',
        fields,
        units: 'metric',
        timesteps: ['current'],
        timezone: 'America/Sao_Paulo',
    })
}

export async function getForecastData() {
    const response = dataCurrentResponse

    // Atual
    const currentResponse = response.data.timelines.filter(timeline => timeline.timestep === 'current')[0].intervals[0]
    const current = new CurrentModel({...currentResponse.values, startTime: currentResponse.startTime})

    // Horário a horário
    const hourly = new Array<HourModel>()
    const hoursResponse = response.data.timelines.filter(timeline => timeline.timestep === '1h')
    hoursResponse[0].intervals.map(hour => {
        hourly.push(new HourModel(hour))
    })

    // Dia a dia
    const daily = new Array<DayModel>()
    const daysResponse = response.data.timelines.filter(timeline => timeline.timestep === '1d')
    daysResponse[0].intervals.map(day => {
        daily.push(new DayModel(day))
    })

    return {current, hourly, daily}
}