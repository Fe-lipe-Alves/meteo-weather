<script setup lang="ts">
import type {DayModel} from "@/models/DayModel";
import {computed} from "vue";
import 'moment/locale/pt-br';

const size = 36

const props = defineProps<{
  day: DayModel
}>()

const iconPath = computed(() => {
  return new URL(`../../assets/tomorrow-icons/v2/small/png/${props.day.weatherCode}0_small@2x.png`, import.meta.url).href
})

const dayName = computed(() => {
  const day = props.day.startTime?.locale('pt-br')?.clone()?.startOf('day')?.calendar(null, {
    sameDay: '[Hoje]',
    nextDay: '[Amanhã]',
    nextWeek: 'dddd',
    lastDay: '[Ontem]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
  })

  return day ? day.charAt(0).toUpperCase() + day.slice(1) : '';
})

function round(number: number|null|undefined) {
  return Math.round(number ?? 0)
}
</script>

<template>
  <div class="flex-1 flex items-center gap-2 p-2 flex-col bg-cultured rounded-md">
    <span>{{ dayName }}</span>
    <img :src="iconPath"
         :alt="day.description"
         :width="size"
         :height="size">
    <div class="flex gap-2">
      <span>{{ round(day.temperatureMax) }}°</span>
      <span class="text-sm">{{ round(day.temperatureMin) }}°</span>
    </div>
    <small>{{ day.description }}</small>
  </div>
</template>

<style scoped>

</style>