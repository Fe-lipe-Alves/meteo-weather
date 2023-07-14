<script setup lang="ts">
import HourlyGroupDay from '@/components/hourly/HourlyGroupDay.vue'
import { useForecastStore } from '@/stores/forecastStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import type { HourModel } from '@/models/HourModel'

const useForecast = useForecastStore()
const { timelines } = storeToRefs(useForecast)

const hours = computed(() => {
  return timelines.value.hours
})

const days = computed(() => {
  const _days: { [key: string]: HourModel[] } = {}

  hours.value.map((hour) => {
    const consult = hour.startTime?.clone()?.startOf('day').format('YYYY-MM-DD')

    if (_days[consult]) {
      _days[consult].push(hour)
    } else {
      _days[consult] = [hour]
    }
  })

  return _days
})
</script>

<template>
  <section class="w-full">
    <div class="w-11/12 lg:w-8/12 bg-cultured dark:bg-black-olive dark:text-slate-300 mx-auto flex flex-col py-2 px-4 rounded-md">
      <HourlyGroupDay :days="days" />
    </div>
  </section>
</template>

<style scoped></style>
