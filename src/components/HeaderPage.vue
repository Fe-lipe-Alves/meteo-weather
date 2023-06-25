<template>
  <header
    class="w-10/12 lg:w-8/12 mx-auto flex flex-wrap grid-cols-3 justify-between items-center py-4 lg:py-8"
  >
    <div class="flex-grow-0 lg:flex-grow flex justify-start flex-1 order-1">
      <h1 class="text-white drop-shadow-lg">MeteoWeather</h1>
    </div>

    <div class="w-full lg:w-auto flex-0 order-3 lg:order-2">
      <InputSearch />
    </div>

    <div class="flex justify-end flex-1 order-2 lg:order-3">
      <small class="text-white drop-shadow-lg">{{ date }}</small>
    </div>
  </header>
</template>

<script lang="ts" setup>
import InputSearch from '@/components/InputSearch.vue'
import { computed } from 'vue'
import moment from 'moment/moment'
import 'moment/locale/pt-br'

const date = computed(() => {
  return moment().locale('pt-br').format('LLL')
})
</script>

<style scoped></style>
