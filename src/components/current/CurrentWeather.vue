<script setup lang="ts">
import { useForecastStore } from '@/stores/forecast'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  temperature: number
  description: string
}>()

const useForecast = useForecastStore()
const { loading } = storeToRefs(useForecast)
</script>

<template>
  <div
    class="w-fit h-fit flex justify-center items-center px-8 py-1 my-4 gap-4 bg-zinc-50 rounded-full backdrop-blur-sm"
  >
    <span
      v-if="loading"
      class="text-2xl lg:text-3xl"
      >Carregando</span
    >
    <template v-else>
      <span class="text-3xl lg:text-4xl">{{ temperature }}°C</span>
      <span class="border-l w-[1px] h-4 border-black-olive"></span>
      <span>{{ description }}</span>
    </template>
  </div>
</template>

<style scoped></style>
