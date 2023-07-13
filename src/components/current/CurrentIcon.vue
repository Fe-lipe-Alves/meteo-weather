<script setup lang="ts">
import IconItem from '@/components/IconItem.vue'
import { useForecastStore } from '@/stores/forecastStore'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  code: number
  sunMoon: 0 | 1
  description: string
}>()

const size = 144

const useForecast = useForecastStore()
const { loading } = storeToRefs(useForecast)
</script>

<template>
  <div
    class="icon-box bg-slate-50/25 rounded-full p-4 flex justify-center items-center"
    :class="{ 'loading-circle': loading }"
    :title="description"
  >
    <IconItem
      class="drop-shadow-4xl"
      type="large"
      v-if="!loading && !isNaN(code)"
      :size="size"
      :weather-code="code"
      :description="description"
      :sun-moon="sunMoon"
    />
  </div>
</template>

<style lang="scss" scoped>
.icon-box {
  width: calc(v-bind(size) * 1px);
  height: calc(v-bind(size) * 1px);
}

.loading-circle::after {
  content: '';
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
