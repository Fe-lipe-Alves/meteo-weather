export async function consultInfoIp() {
    return await fetch('http://ip-api.com/json')
        .then(response => response.json())
}