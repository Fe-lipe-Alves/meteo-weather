<template>
  <div
      class="container min-w-full min-h-screen"
      :style="`--background-image: url('${dataImage}');--background-color:${colorImage}`"
  >
    <HeaderPage/>

    <main class="flex flex-col gap-8 py-8">
      <CurrentBox/>
      <HourlyBox/>
      <WeekBox/>
    </main>

    <FooterPage/>
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from "@/components/HeaderPage.vue";
import HourlyBox from "@/components/hourly/HourlyBox.vue";
import CurrentBox from "@/components/current/CurrentBox.vue";
import WeekBox from "@/components/week/WeekBox.vue";
import FooterPage from "@/components/FooterPage.vue";
import {onBeforeMount, ref, watch} from "vue";
import {useBackgroundImageStore} from "@/stores/backgroundImage";
import {storeToRefs} from "pinia";
import {useForecastStore} from "@/stores/forecast";
import {useIpInfoStore} from "@/stores/ipInfos";

// Stores
const useBackgroundImage = useBackgroundImageStore()
const useIpInfo = useIpInfoStore()
const {ipInfo} = storeToRefs(useIpInfo)
const useForecast = useForecastStore()
const {loading} = storeToRefs(useForecast)

const dataImage = ref('LME4P+xs9aNG0gkCxtoz4nIr%1of')
const colorImage = ref('')
const imageLoadHidden = ref(null)

async function getLocationFromBrowser() {
  const permission = navigator.permissions &&
      (await navigator.permissions.query({name: 'geolocation'})).state === 'granted'

  if (!navigator.geolocation || !permission) {
    await consultIp()
  }

  navigator.geolocation.getCurrentPosition(async position => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    await searchForecast(position.coords.latitude, position.coords.longitude, timezone)
  })
}

async function consultIp() {
  await useIpInfo.loadInfos()
  await searchForecast(ipInfo.value.infos.lat, ipInfo.value.infos.lon, ipInfo.value.infos.timezone)
}

async function searchForecast(latitude, longitude, timezone) {
  try {
    await useForecast.loadWeather(latitude, longitude, timezone)
  } catch (error) {
    console.log('TEVE UM ERRO')
  }
}

watch(loading, (newValue) => {
  if (!newValue) {
    dataImage.value = useBackgroundImage.realImage()
  }
})

onBeforeMount(async () => {
  loading.value = true

  await useBackgroundImage.load()
  dataImage.value = useBackgroundImage.getBlurImageUrl()
  colorImage.value = useBackgroundImage.getColorImage()
  await getLocationFromBrowser()

  loading.value = false
})
</script>

<style lang="scss" scoped>
.container {
  --bg-subcolor: rgba(134, 134, 134, 0.3);
  background-image: linear-gradient(0deg, var(--bg-subcolor), var(--bg-subcolor)), var(--background-image);
  background-color: var(--background-color);
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>