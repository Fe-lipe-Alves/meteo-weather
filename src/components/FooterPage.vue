<script setup lang="ts">

import {useUnsplashStore} from "@/stores/unsplashStore";
import {storeToRefs} from "pinia";

const useUnsplash = useUnsplashStore()
const {unsplash} = storeToRefs(useUnsplash)
</script>

<template>
  <footer
    class="w-10/12 text-center lg:w-8/12 mx-auto grid gap-2 grid-cols-1 lg:grid-cols-3 justify-between items-center text-xs pb-1 text-cultured"
  >
    <p>Fonte meteorológica <a href="https://www.tomorrow.io">Tomorrow.io</a></p>
    <p>Desenvolvido por <a href="https://github.com/Fe-lipe-Alves">Felipe Alves</a></p>
    <p>
      Imagem
      <a
          :href="unsplash.image.user?.links.html"
         target="_blank"
      >
        {{ unsplash.image.user?.name }}
      </a>
      por
      <a
          href="https://unsplash.com"
         target="_blank"
      >Unsplash</a>
    </p>
  </footer>
</template>

<style scoped></style>
