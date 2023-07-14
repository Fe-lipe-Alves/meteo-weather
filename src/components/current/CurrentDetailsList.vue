<script setup lang="ts">
import CurrentDetailsListItem from "@/components/current/CurrentDetailsListItem.vue";
import {useForecastStore} from "@/stores/forecastStore";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import IconArrow from "@/components/icon/IconArrow.vue";

const useForecast = useForecastStore()
const { timelines } = storeToRefs(useForecast)

const current = computed(() => {
  return timelines.value.current
})

const windDirection = computed(() => {
  const angle = current.value.windDirection + 90
  return `rotate: ${angle}deg`
})

function round(number: number | null | undefined) {
  return Math.round(number ?? 0)
}
</script>

<template>
  <div class="mt-4 grid gap-4 text-center text-xs lg:text-sm font-medium text-black-olive grid-cols-2 lg:grid-cols-4">
    <CurrentDetailsListItem>Sensação {{ round(current.temperatureApparent) }} °C</CurrentDetailsListItem>
    <CurrentDetailsListItem>
      Vento {{ round(current.windSpeed ?? 0) }} km/h
      <IconArrow :style="windDirection" />
    </CurrentDetailsListItem>
    <CurrentDetailsListItem>Umidade {{ round(current.humidity) }}%</CurrentDetailsListItem>
    <CurrentDetailsListItem>Chance de chuva {{ round(current.precipitationProbability) }}%</CurrentDetailsListItem>
  </div>
</template>
