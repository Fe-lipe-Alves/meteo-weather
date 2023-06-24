<script setup lang="ts">
import type {HourModel} from "@/models/HourModel";
import {computed} from "vue";
import moment from "moment/moment";

const size = 24

const props = defineProps<{
  hour: HourModel
}>()

const hourFormated = computed(() => {
  return props.hour.startTime?.clone().format('HH:SS')
})

const temperature = computed(() => {
  return Math.round(props.hour.temperature ?? 0)
})

const sunMoon = computed(() => {
  return props.hour.startTime?.isBetween(props.hour.sunriseTime, props.hour.sunsetTime) ? '0' : '1'
})

const iconPath = computed(() => {
  return new URL(`../../assets/tomorrow-icons/v2/small/png/${props.hour.weatherCode}${sunMoon.value}_small@2x.png`, import.meta.url).href
})
</script>

<template>
  <div>
    <img :src="iconPath"
         :alt="hour.description"
         :title="hour.description"
         :width="size"
         :height="size"
         :data="`${hour.weatherCode}${sunMoon}_large@2x.png`"
    >
    <span>{{ temperature }}°</span>
    <small>{{ hourFormated }}</small>
  </div>
</template>

<style scoped>

</style>