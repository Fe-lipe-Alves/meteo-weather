<template>
  <div
    class="container min-w-full min-h-screen"
    :style="backgroundImageUnsplash"
    v-show="!building"
  >
    <HeaderPage />

    <main class="flex flex-col gap-8 py-8">
      <CurrentBox />
      <HourlyBox v-if="!loading" />
      <WeekBox v-if="!loading" />
    </main>

    <FooterPage />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '@/components/HeaderPage.vue'
import HourlyBox from '@/components/hourly/HourlyBox.vue'
import CurrentBox from '@/components/current/CurrentBox.vue'
import WeekBox from '@/components/week/WeekBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import {onBeforeMount, ref, watch} from 'vue'
import {storeToRefs} from 'pinia'
import {useUnsplashStore} from '@/stores/unsplashStore'
import {useForecastStore} from '@/stores/forecastStore'
import {useLocationStore} from '@/stores/locationStore'

const useUnsplash = useUnsplashStore()
const {backgroundImageUnsplash} = storeToRefs(useUnsplash)
const useLocation = useLocationStore()
const useForecast = useForecastStore()
const { loading } = storeToRefs(useForecast)

const building = ref(true)

async function getLocationFromBrowser() {
  const permission = navigator.permissions &&
    (await navigator.permissions.query({ name: 'geolocation' })).state === 'granted'

  if (!navigator.geolocation || !permission) {
    await useLocation.loadFromIp()
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    await useLocation.getLocationFromCoordinates(position.coords.latitude, position.coords.longitude)
  })
}

onBeforeMount(async () => {
  loading.value = true
  await getLocationFromBrowser()
})

watch(() => loading.value, (newValue) => {
  if (!newValue) {
    const splash = document.getElementById('splash')

    if (splash) {
      splash.style.display = 'none'
    }

    building.value = false
  }
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

@media (prefers-color-scheme: dark) {
  .container {
    --bg-subcolor: rgba(66, 46, 46, 0.3);
  }
}
</style>
