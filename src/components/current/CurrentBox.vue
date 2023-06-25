<script setup lang="ts">
import CurrentWeather from '@/components/current/CurrentWeather.vue'
import CurrentDetailsList from '@/components/current/CurrentDetailsList.vue'
import CurrentIcon from '@/components/current/CurrentIcon.vue'
import { useForecastStore } from '@/stores/forecastStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import {useGlobalStore} from "@/stores/globalStore";

const useGlobal = useGlobalStore()
const useForecast = useForecastStore()
const { timelines } = storeToRefs(useForecast)

const current = computed(() => {
  return timelines.value.current
})

const details = computed(() => {
  const details = []

  const fields = [
    'Sensação ' + round(current.value.temperatureApparent) + '°C',
    'Vento ' + round(current.value.windSpeed ?? 0) + ' km/h',
    'Umidade ' + round(current.value.humidity) + '%',
    'Chance de chuva ' + round(current.value.precipitationProbability) + '%'
  ]

  for (let id = 0; id < fields.length; id++) {
    details.push({ id, text: fields[id] })
  }

  return details
})

function round(number: number | null | undefined) {
  return Math.round(number ?? 0)
}
</script>

<template>
  <section class="w-full">
    <div class="w-10/12 lg:w-8/12 mx-auto flex flex-col items-center gap-2 lg:gap-4">
      <CurrentIcon
        :code="current.weatherCode"
        :sun-moon="useGlobal.sunMoon(current)"
        :description="`Ícone de ${current.description}`"
      />

      <CurrentWeather
        :description="`${current.description}`"
        :temperature="round(current.temperature)"
      />

      <CurrentDetailsList :details="details" />
    </div>
  </section>
</template>
