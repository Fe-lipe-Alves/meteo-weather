<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import {useForecastStore} from "@/stores/forecast";
import {onBeforeMount} from "vue";
import {useIpInfoStore} from "@/stores/ipInfos";
import {storeToRefs} from "pinia";

const useForecast = useForecastStore()
const useIpInfo = useIpInfoStore()
const {ipInfo} = storeToRefs(useIpInfo)

async function getLocationFromIp() {
  await useIpInfo.loadInfos()
  await searchForecast(ipInfo.value.lat, ipInfo.value.lon, ipInfo.value.timezone)
}

async function getLocationFromBrowser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      await searchForecast(position.coords.latitude, position.coords.longitude, timezone)
    })
  }
}

async function searchForecast(latitude, longitude, timezone) {
  try {
    await useForecast.loadWeather(latitude, longitude, timezone)
  } catch (error) {
    // ToDo // Exibir alerta de erro
    console.log('TEVE UM ERRO')
  }
}

onBeforeMount(async () => {
  await getLocationFromIp()
  await getLocationFromBrowser()
})
</script>

<style scoped>
</style>
