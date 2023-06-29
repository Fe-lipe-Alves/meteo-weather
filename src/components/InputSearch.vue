<template>
  <div
      class="lg:w-96 pb-2 rounded-[1.4rem] relative"
      :class="{ 'rounded-b-none bg-cultured': isFocus }"
      v-click-outside="() => setFocus(false)"

      @focusin="setFocus(true)"
  >
    <input
        type="text"
        autocomplete="off"
        class="w-full rounded-[1.4rem] shadow px-8 py-2 text-center text-lg focus:outline-none bg-cultured/70"
        :class="{ 'bg-white': isFocus }"
        :value="search"
        @input="runSearch"
    />

    <div
        class="w-full mt-2 list bg-inherit absolute rounded-b-[1.4rem] overflow-hidden z-10"
        v-show="isFocus"
    >
      <ul v-if="autocompleteOptions.length">
        <li
            class="px-5 lg:px-8 py-2 text-sm hover:bg-white truncate cursor-default"
            v-for="city in autocompleteOptions"
            :key="city.id"
            @click="selectCity(city)"
        >
          {{ city.description }}
        </li>
      </ul>

      <div
          class="loading-circle flex justify-center gap-2 text-xs text-slate-400 mb-2"
          v-else-if="loadingSuggestions"
      >
        <span>Pesquisando</span>
      </div>

      <div
          class="text-center text-xs text-slate-400 mb-2"
          v-else
      >
        Digite para pesquisar
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import {useLocationStore} from '@/stores/locationStore'
import {storeToRefs} from 'pinia'
import {useForecastStore} from '@/stores/forecastStore'

const useForecast = useForecastStore()
const {loading} = storeToRefs(useForecast)
const useLocation = useLocationStore()
const {location, autocompleteOptions} = storeToRefs(useLocation)

const isFocus = ref(false)
const search = ref('')
const loadingSuggestions = ref(false)

function setFocus(value: boolean) {
  isFocus.value = value
}

async function runSearch(event: any) {
  const text = event.target.value
  search.value = text

  if (text.length > 3) {
    loadingSuggestions.value = true
    await useLocation.searchAutocomplete(text)
    loadingSuggestions.value = false
  } else {
    useLocation.clearAutocomplete()
  }
}

async function selectCity(city) {
  setFocus(false)
  loading.value = true

  await useLocation.searchLocation(city.id)
  await useForecast.load(location.value.latitude, location.value.longitude, location.value.timezone)

  loading.value = false
}

watch(
    () => location.value.address,
    () => {
      search.value = location.value.address
    }
)
</script>

<style scoped>
.loading-circle::after {
  content: '';
  width: 1rem;
  height: 1rem;
  border: 1px solid transparent;
  border-top: 1px solid #333;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
