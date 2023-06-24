<script setup lang="ts">
import {computed} from "vue";
import IconItem from "@/components/IconItem.vue";

const props = defineProps<{
  code: number
  sunMoon: 0|1
  description: string
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
    <IconItem
        class="drop-shadow-4xl"
        :size="size"
        type="large"
        :weather-code="code"
        :description="description"
        :sun-moon="sunMoon"
    />
  </div>
</template>

<style scoped>

</style>