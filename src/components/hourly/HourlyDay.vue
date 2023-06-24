<script setup lang="ts">
import HourlyHour from "@/components/hourly/HourlyHour.vue";
import {computed} from "vue";
import type {HourModel} from "@/models/HourModel";
import 'moment/locale/pt-br';

const props = defineProps<{
  day: HourModel[]
}>()

const dayName = computed(() => {
  const day = props.day[0].startTime?.locale('pt-br')?.clone()?.startOf('day')?.calendar(null, {
    sameDay: '[Hoje]',
    nextDay: '[Amanhã]',
    nextWeek: 'dddd',
    lastDay: '[Ontem]',
    lastWeek: '[Última] dddd',
    sameElse: 'DD/MM/YYYY'
  })

  return day ? day.charAt(0).toUpperCase() + day.slice(1) : '';
})
</script>

<template>
  <div>
    <div class="sticky left-0 w-fit">
      <h3 class="w-fit">{{ dayName }}</h3>
    </div>
    <div class="flex divide-x divide-gray-300">
      <HourlyHour
          v-for="hour in day"
          :key="hour"
          :hour="hour"
          class="w-fit px-2 flex flex-col items-center"
      />
    </div>
  </div>
</template>

<style scoped>

</style>