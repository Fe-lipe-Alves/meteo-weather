<template>
  <header class="w-8/12 mx-auto flex grid-cols-3 justify-between items-center py-8">
    <div class="flex justify-start flex-1">
        <h1 class="text-white drop-shadow-lg">MeteoWeather</h1>
    </div>

    <div class="flex-0">
        <InputSearch/>
    </div>

    <div class="flex justify-end flex-1">
        <span class="text-white drop-shadow-lg">Seg. 08 de maio de 2023, 15:35</span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import InputSearch from "@/components/InputSearch.vue";
</script>

<style scoped>

</style>