<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  code: string
  description?: string
}>()

const size = 144

const iconPath = computed(() => {
  return new URL(`../../assets/tomorrow-icons/v2/large/png/${props.code}@2x.png`, import.meta.url).href
})
</script>

<template>
  <div class="flex justify-center items-center my-0 lg:my-4">
    <img
        :src="iconPath"
        :alt="props.description"
        class="drop-shadow-4xl"
        :width="size"
        :height="size"
    >
  </div>
</template>

<style scoped>

</style>