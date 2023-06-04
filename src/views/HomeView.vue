<template>
  <HeaderPage/>

  <main class="flex flex-col gap-8 py-8">
    <CurrentBox/>
    <HourlyBox/>
    <WeekBox/>
  </main>
</template>

<script lang="ts" setup>
import HeaderPage from "@/components/HeaderPage.vue";
import HourlyBox from "@/components/hourly/HourlyBox.vue";
import CurrentBox from "@/components/current/CurrentBox.vue";
import WeekBox from "@/components/week/WeekBox.vue";
</script>

<style scoped>

</style>