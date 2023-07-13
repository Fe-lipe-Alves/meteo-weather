<script setup lang="ts">
import WeekDay from '@/components/week/WeekDay.vue'
import { useForecastStore } from '@/stores/forecastStore'
import { storeToRefs } from 'pinia'

const useForecast = useForecastStore()
const { timelines } = storeToRefs(useForecast)
</script>

<template>
  <div class="w-full flex grid-flow-col gap-2 lg:gap-4 overflow-x-auto py-1">
    <WeekDay
      v-for="day in timelines.days"
      :key="day.startTime?.format('Y-m-d')"
      :day="day"
    />
  </div>
</template>

<style scoped></style>
