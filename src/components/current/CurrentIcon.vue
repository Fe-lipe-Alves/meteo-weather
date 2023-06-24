<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  code: string
  description?: string
}>()

const size = 144

const iconPath = computed(() => {
  return new URL(`../../assets/tomorrow-icons/v2/large/png/${props.code}_large@2x.png`, import.meta.url).href
})
</script>

<template>
  <div
      class="bg-slate-50/25 rounded-full p-4 flex justify-center items-center "
      :class="`w-[${size}px] h-[${size}px]`"
      :title="description"
  >
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