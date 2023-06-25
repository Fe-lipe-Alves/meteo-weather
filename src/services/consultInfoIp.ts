export async function consultInfoIp() {
  return await fetch('https://ipinfo.io?token=760d42e002d21f').then((response) => response.json())
}
