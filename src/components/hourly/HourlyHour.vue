<script setup lang="ts">
import type {HourModel} from "@/models/HourModel";
import {computed} from "vue";

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

const iconPath = computed(() => {
  return new URL(`../../assets/tomorrow-icons/v2/small/png/${props.hour.weatherCode}0_small@2x.png`, import.meta.url).href
})
</script>

<template>
  <div>
    <img :src="iconPath"
         :alt="hour.description"
         :width="size"
         :height="size"
         :data="`${hour.weatherCode}0_large@2x.png`"
    >
    <span>{{ temperature }}°</span>
    <small>{{ hourFormated }}</small>
  </div>
</template>

<style scoped>

</style>