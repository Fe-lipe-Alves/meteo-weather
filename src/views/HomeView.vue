<template>
  <HeaderPage/>

  <main>
    <CurrentBox/>
    <HourlyBox/>
  </main>
</template>

<script lang="ts" setup>
import HeaderPage from "@/components/HeaderPage.vue";
import HourlyBox from "@/components/hourly/HourlyBox.vue";
import CurrentBox from "@/components/current/CurrentBox.vue";
</script>

<style scoped>

</style>