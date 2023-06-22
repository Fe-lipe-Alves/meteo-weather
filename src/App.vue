<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import {useForecastStore} from "@/stores/forecast";
import {onMounted} from "vue";

const useForecast = useForecastStore()

async function getLocationFromBrowser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(await searchForecast);
  }
}

async function searchForecast(position) {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    await useForecast.loadWeather(position.coords.latitude, position.coords.longitude, timezone)
  } catch (error) {
    // ToDo // Exibir alerta de erro
    console.log('TEVE UM ERRO')
  }
}

function getLocationFromIp() {

}

onMounted(async () => {
  getLocationFromIp
  await getLocationFromBrowser()
})
</script>

<style scoped>
</style>
