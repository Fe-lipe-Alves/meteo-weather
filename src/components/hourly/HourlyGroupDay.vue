<script setup lang="ts">

import HourlyDay from "@/components/hourly/HourlyDay.vue";
</script>

<template>
  <div class="w-full px-0 py-1 flex relative overflow-x-auto scroll-smooth">
    <HourlyDay v-for="d in 2" :key="d"/>
  </div>
</template>

<style scoped>

</style>