<script setup lang="ts">

</script>

<template>
  <div class="w-full px-0 py-1 flex relative overflow-x-auto scroll-smooth">
    <div
        v-for="d in 2"
        :key="d"
    >
      <div class="sticky left-0 w-fit">
        <h3 class="w-fit">Hoje {{ d }}</h3>
      </div>
      <div class="flex divide-x divide-gray-300">
        <div
            v-for="i in 24"
            :key="i"
            class="w-fit px-2 flex flex-col items-center"
        >
          <img src="@/assets/tomorrow-icons/v2/small/png/10000_clear_small.png">
          <span>24°</span>
          <small>{{ i }}:00</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>