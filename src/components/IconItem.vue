<script setup lang="ts">
import { computed } from 'vue'
import {pathToIcon} from "@/utilities/helpers";

const props = defineProps<{
  weatherCode: number
  sunMoon: 0 | 1
  size: number
  type: 'large' | 'small'
  description: string
}>()

const iconPath = computed(() => {
  return pathToIcon(props.weatherCode, props.sunMoon, props.type, '@2x')
})
</script>

<template>
  <img
    :src="iconPath"
    :alt="description"
    :title="description"
    :width="size"
    :height="size"
  />
</template>
