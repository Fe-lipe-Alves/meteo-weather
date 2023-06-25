<script setup lang="ts">
import HourlyDay from '@/components/hourly/HourlyDay.vue'
import { HourModel } from '@/models/HourModel'

const props = defineProps<{
  days: { [key: string]: HourModel[] }
}>()
</script>

<template>
  <div class="w-full px-0 py-1 flex relative overflow-x-auto scroll-smooth divide-x">
    <HourlyDay
      v-for="(day, index) in days"
      :key="index"
      :day="day"
    />
  </div>
</template>

<style scoped></style>
