<script setup lang="ts">
import {computed} from "vue";

const details = computed(() => {
  return [
    'Sensação 30°',
    'Vento 5 km/h',
    'Umidade 60%',
    'Chance de chuva 5%',
  ]
})
</script>

<template>
  <div class="mt-4 flex gap-4 text-center font-medium text-black-olive text-sm">
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