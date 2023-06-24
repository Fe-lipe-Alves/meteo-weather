<script setup lang="ts">
import type {HourModel} from "@/models/HourModel";
import {computed} from "vue";
import moment from "moment/moment";
import IconItem from "@/components/IconItem.vue";

const size = 24

const props = defineProps<{
  hour: HourModel
}>()

const hourFormated = computed(() => {
  return props.hour.startTime?.clone().format('HH:SS')
})

const temperature = computed(() => {
  return Math.round(props.hour.temperature ?? 0)
})

const sunMoon = computed(() => {
  return props.hour.startTime?.isBetween(props.hour.sunriseTime, props.hour.sunsetTime) ? '0' : '1'
})
</script>

<template>
  <div>
    <IconItem
        type="small"
        :size="size"
        :weather-code="hour.weatherCode"
        :description="hour.description"
        :sun-moon="sunMoon"
    />
    <span>{{ temperature }}°</span>
    <small>{{ hourFormated }}</small>
  </div>
</template>

<style scoped>

</style>