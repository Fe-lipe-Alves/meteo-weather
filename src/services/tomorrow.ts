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