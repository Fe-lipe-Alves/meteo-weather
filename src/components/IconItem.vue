<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  weatherCode: number
  sunMoon: 0 | 1
  size: number
  type: 'large' | 'small'
  description: string
}>()

const iconPath = computed(() => {
  if (!props.weatherCode) {
    return ''
  }

  const firstIcon = `/tomorrow-icons/v2/${props.type}/png/${props.weatherCode}${props.sunMoon}_${props.type}@2x.png`
  const secondIcon = `/tomorrow-icons/v2/${props.type}/png/${props.weatherCode}0_${props.type}@2x.png`

  return imageExists(firstIcon) ? firstIcon : secondIcon
})

function imageExists(image_url: string) {
  const dontExists = [1001, 4000, 4200]
  if (dontExists.indexOf(props.weatherCode) > -1) {
    return false
  }

  const http = new XMLHttpRequest()

  http.open('HEAD', image_url, false)
  http.send()

  return http.status != 404
}
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
