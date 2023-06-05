<template>
  <header class="w-10/12 lg:w-8/12 mx-auto flex flex-wrap grid-cols-3 justify-between items-center py-4 lg:py-8">
    <div class="flex-grow-0 lg:flex-grow flex justify-start flex-1 order-1">
        <h1 class="text-white drop-shadow-lg">MeteoWeather</h1>
    </div>

    <div class="w-full lg:w-auto flex-0 order-3 lg:order-2">
        <InputSearch/>
    </div>

    <div class="flex justify-end flex-1 order-2 lg:order-3">
        <span class="text-white drop-shadow-lg">Seg. 08 de maio de 2023, 15:35</span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import InputSearch from "@/components/InputSearch.vue";
</script>

<style scoped>

</style>