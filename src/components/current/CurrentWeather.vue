<script setup lang="ts">
const props = defineProps<{
  degrees: number
  description: string
}>()
</script>

<template>
  <div class="w-fit h-fit flex justify-center items-center px-8 py-1 my-4 gap-4 bg-zinc-50 rounded-full backdrop-blur-sm">
    <span class="text-3xl lg:text-4xl">{{ degrees }}°</span>
    <span class="border-l w-[1px] h-4 border-black-olive"></span>
    <span>{{ description }}</span>
  </div>
</template>

<style scoped>

</style>