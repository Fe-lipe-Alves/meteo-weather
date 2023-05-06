<template>
  <header class="w-10/12 mx-auto flex justify-between items-center py-8">
    <div>
        <h1>MeteoWeather</h1>
    </div>

    <div>
        <InputSearch/>
    </div>

    <div>
        <span>06/05/2023</span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import InputSearch from "@/components/InputSearch.vue";
</script>

<style scoped>

</style>