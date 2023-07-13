<script setup lang="ts">
const props = defineProps<{
  details: {
    id: number
    text: string
  }[]
}>()
</script>

<template>
  <div class="mt-4 grid gap-4 text-center text-xs lg:text-sm font-medium text-black-olive grid-cols-2 lg:grid-cols-4">
    <span
      class="bg-cultured/75 px-4 py-1 rounded-md flex justify-center items-center"
      v-for="detail in details"
      :key="detail.id"
    >
      {{ detail.text }}
    </span>
  </div>
</template>
