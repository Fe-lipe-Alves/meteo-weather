<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import {useForecastStore} from "@/stores/forecast";

const useForecast = useForecastStore()
useForecast.loadWeather()
</script>

<style scoped>
</style>
