<script setup lang="ts">
import HourlyGroupDay from "@/components/hourly/HourlyGroupDay.vue";
import {useForecastStore} from "@/stores/forecast";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import type {HourModel} from "@/models/HourModel";

const useForecast = useForecastStore()
const {hourly} = storeToRefs(useForecast)

const days = computed(() => {
  const _days: {[key: string]: HourModel[]} = {}

  hourly.value.map(hour => {
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
    <div class="w-10/12 lg:w-8/12 bg-cultured mx-auto flex flex-col py-2 px-4 rounded-md">
      <HourlyGroupDay :days="days"/>
    </div>
  </section>
</template>

<style scoped>

</style>