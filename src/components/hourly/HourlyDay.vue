<script setup lang="ts">
import HourlyHour from "@/components/hourly/HourlyHour.vue";
</script>

<template>
  <div>
    <div class="sticky left-0 w-fit">
      <h3 class="w-fit">Hoje</h3>
    </div>
    <div class="flex divide-x divide-gray-300">
      <HourlyHour
          v-for="i in 24"
          :key="i"
          class="w-fit px-2 flex flex-col items-center"
      />
    </div>
  </div>
</template>

<style scoped>

</style>