<script setup lang="ts">
const props = defineProps<{
  details: {
    id: number,
    text: string,
  }[]
}>()
</script>

<template>
  <div class="mt-4 flex gap-4 text-center text-xs lg:text-sm font-medium text-black-olive ">
    <span
        class="bg-cultured/75 px-4 py-1 rounded-md"
        v-for="detail in details"
        :key="detail.id"
    >
      {{ detail.text }}
    </span>
  </div>
</template>