<script setup lang="ts">
import {computed} from "vue";
import {useForecastStore} from "@/stores/forecast";

const useForecast = useForecastStore()

const details = computed(() => {
  return [
    'Sensação ' + useForecast.current.temperatureApparent,
    'Vento ' + useForecast.current.windSpeed + ' km/h',
    'Umidade ' + useForecast.current.humidity + '%',
    'Chance de chuva ' + useForecast.current.precipitationProbability + '%',
  ]
})
</script>

<template>
  <div class="mt-4 flex gap-4 text-center text-xs lg:text-sm font-medium text-black-olive ">
    <span
        class="bg-cultured/75 px-4 py-1 rounded-md"
        v-for="(detail, index) in details"
        :key="index"
    >
      {{ detail }}
    </span>
  </div>
</template>

<style scoped>

</style>