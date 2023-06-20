<script setup lang="ts">
import CurrentWeather from "@/components/current/CurrentWeather.vue";
import CurrentDetailsList from "@/components/current/CurrentDetailsList.vue";
import CurrentIcon from "@/components/current/CurrentIcon.vue";

import {useForecastStore} from "@/stores/forecast";

const useForecast = useForecastStore()
const current = useForecast.current
</script>

<template>
  <section class="w-full">
    <div class="w-10/12 lg:w-8/12 mx-auto flex flex-col items-center gap-2 lg:gap-4">
      <CurrentIcon code="40010_rain_large" :description="`Ícone de ${current.description}`"/>

      <CurrentWeather :description="current.description" :temperature="current.temperature"/>

      <CurrentDetailsList/>
    </div>
  </section>
</template>

<style scoped>

</style>