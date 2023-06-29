const request = async (uri: string) => {
  const myHeaders = new Headers()
  myHeaders.append('X-Api-Key', 'QGmwEvxyqsXyLmixaTU2kg==i6Lu2ag9zUXHtewl')

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders
  }

  return await fetch(`https://api.api-ninjas.com/v1/${uri}`, requestOptions).then((response) =>
    response.json()
  )
}

export async function searchCity(text: string) {
  return await request(`city?name=${text}&limit=4`)
}

export async function getTimezoneCity(cityName: string) {
  return await request(`timezone?city=${cityName}`)
}

export async function reverseGeocoding(lat: number, lon: number) {
  return await request(`reversegeocoding?lat=${lat}&lon=${lon}`)
}