<script setup lang="ts">

import WeekDay from "@/components/week/WeekDay.vue";
</script>

<template>
  <div class="w-full flex gap-2 lg:gap-4 overflow-x-auto py-1 ">
    <WeekDay v-for="d in 6" :key="d"/>
  </div>
</template>

<style scoped>

</style>