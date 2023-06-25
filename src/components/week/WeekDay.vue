<script setup lang="ts">
import type { DayModel } from '@/models/DayModel'
import { computed } from 'vue'
import 'moment/locale/pt-br'
import IconItem from '@/components/IconItem.vue'

const size = 36

const props = defineProps<{
  day: DayModel
}>()

const dayName = computed(() => {
  const day = props.day.startTime?.locale('pt-br')?.clone()?.startOf('day')?.calendar(null, {
    sameDay: '[Hoje]',
    nextDay: '[Amanhã]',
    nextWeek: 'dddd',
    lastDay: '[Ontem]',
    lastWeek: '[Última] dddd',
    sameElse: 'DD/MM/YYYY'
  })

  return day ? day.charAt(0).toUpperCase() + day.slice(1) : ''
})

function round(number: number | null | undefined) {
  return Math.round(number ?? 0)
}
</script>

<template>
  <div class="flex-1 flex items-center gap-2 p-2 flex-col bg-cultured rounded-md">
    <span>{{ dayName }}</span>
    <div class="flex-1 flex items-end">
      <IconItem
        type="small"
        :size="size"
        :weather-code="day.weatherCode"
        :description="day.description"
        :sun-moon="0"
      />
    </div>
    <div class="flex gap-2">
      <span>{{ round(day.temperatureMax) }}°</span>
      <span class="text-sm">{{ round(day.temperatureMin) }}°</span>
    </div>
    <small>{{ day.description }}</small>
  </div>
</template>

<style scoped></style>
