<template>
  <HeaderPage/>
  <main>
    <div class="w-full">
      <div class="w-full mx-auto flex flex-col items-center gap-4">
        <CurrentIcon code="40010_rain_large" description="Ícone de chuva leve" />

        <CurrentWeather description="Chuva leve" degrees="32" />

        <CurrentDetailsList />
        </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import HeaderPage from "@/components/HeaderPage.vue";
import CurrentIcon from "@/components/current/CurrentIcon.vue";
import CurrentWeather from "@/components/current/CurrentWeather.vue";
import CurrentDetailsList from "@/components/current/CurrentDetailsList.vue";
</script>

<style scoped>

</style>