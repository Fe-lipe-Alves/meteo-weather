<script setup lang="ts">
import WeekDay from '@/components/week/WeekDay.vue'
import { useForecastStore } from '@/stores/forecast'
import { storeToRefs } from 'pinia'

const useForecast = useForecastStore()
const { daily } = storeToRefs(useForecast)
</script>

<template>
  <div class="w-full flex gap-2 lg:gap-4 overflow-x-auto py-1">
    <WeekDay
      v-for="day in daily"
      :key="day.startTime?.format('Y-m-d')"
      :day="day"
    />
  </div>
</template>

<style scoped></style>
