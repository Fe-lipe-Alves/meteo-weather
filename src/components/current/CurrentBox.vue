<script setup lang="ts">
import CurrentWeather from "@/components/current/CurrentWeather.vue";
import CurrentDetailsList from "@/components/current/CurrentDetailsList.vue";
import CurrentIcon from "@/components/current/CurrentIcon.vue";
</script>

<template>
  <section class="w-full">
    <div class="w-full mx-auto flex flex-col items-center gap-4">
      <CurrentIcon code="40010_rain_large" description="Ícone de chuva leve"/>

      <CurrentWeather description="Chuva leve" degrees="32"/>

      <CurrentDetailsList/>
    </div>
  </section>
</template>

<style scoped>

</style>