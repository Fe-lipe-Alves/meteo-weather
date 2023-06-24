<template>
  <div
      class="lg:w-96 pb-2 rounded-[1.4rem] relative"
      :class="{'rounded-b-none bg-cultured': isFocusAndNotEmpty}"
      @focusin="setFocus(true)"
  >
    <input
        type="text"
        autocomplete="off"
        class="w-full rounded-[1.4rem] shadow px-8 py-2 text-center text-lg focus:outline-none bg-cultured/70"
        :class="{'bg-white': isFocus}"
        :value="search"
        @input="runSearch"
    >

    <div
        class="w-full mt-2 list bg-inherit absolute rounded-b-[1.4rem] overflow-hidden z-10"
        v-show="isFocusAndNotEmpty"
    >
      <ul>
        <li
            class="px-5 lg:px-8 py-2 text-sm hover:bg-white truncate"
            v-for="(city, index) in cities"
            :key="index"
            @click="selectCity(city)"
        >
          {{ city.name }}, {{ city.country }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {useIpInfoStore} from "@/stores/ipInfos";
import {storeToRefs} from "pinia";
import {getTimezoneCity, searchCity} from "@/services/citiesSearch";
import type {CitySearchType} from "@/types/CitySearchType";
import {useForecastStore} from "@/stores/forecast";

const useForecast = useForecastStore()
const useIpInfo = useIpInfoStore()
const {ipInfo} = storeToRefs(useIpInfo)

const cities = ref<CitySearchType[]>([])
const isFocus = ref(false)
const search = ref('')

const isFocusAndNotEmpty = computed(() => {
  return isFocus.value && cities.value.length
})

function setFocus(value) {
  isFocus.value = value
}

async function runSearch(event) {
  const text = event.target.value

  if (text.length > 3) {
    cities.value = await searchCity(text)
  }
}

async function selectCity(city: CitySearchType) {
  console.log(`cidade ${city.name} selecionada`)
  const timezone = await getTimezoneCity(city.name)
  console.log('timezone é ', timezone)
  await searchForecast(city.latitude, city.longitude, timezone.timezone)
  console.log(useForecast.current)
}

async function searchForecast(latitude, longitude, timezone) {
  try {
    await useForecast.loadWeather(latitude, longitude, timezone)
  } catch (error) {
    // ToDo // Exibir alerta de erro
    console.log('TEVE UM ERRO')
  }
}

watch(() => ipInfo.value.infos.city, () => {
  search.value = ipInfo.value.infos.city + ', ' + ipInfo.value.infos.countryCode
})
</script>

<style scoped>

</style>