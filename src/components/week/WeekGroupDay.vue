<script setup lang="ts">
import WeekDay from "@/components/week/WeekDay.vue";
import type {DayModel} from "@/models/DayModel";

const props = defineProps<{
  days: DayModel[]
}>()
</script>

<template>
  <div class="w-full flex gap-2 lg:gap-4 overflow-x-auto py-1 ">
    <WeekDay v-for="day in days" :key="day.startTime?.format('Y-m-d')" :day="day"/>
  </div>
</template>

<style scoped>

</style>