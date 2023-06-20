<script setup lang="ts">
import CurrentWeather from "@/components/current/CurrentWeather.vue";
import CurrentDetailsList from "@/components/current/CurrentDetailsList.vue";
import CurrentIcon from "@/components/current/CurrentIcon.vue";
import {useForecastStore} from "@/stores/forecast";
import {storeToRefs} from "pinia";
import {computed, onMounted, reactive} from "vue";

const useForecast = useForecastStore()
const {current} = storeToRefs(useForecast)

const icon = computed(() => {
  return `${current.value.weatherCode}1_clear_large`
})

const details = reactive([])

function setDetails() {
  const fields = [
    'Sensação ' + round(current.value.temperatureApparent) + '°C',
    'Vento ' + round(current.value.windSpeed ?? 0) + ' km/h',
    'Umidade ' + round(current.value.humidity) + '%',
    'Chance de chuva ' + round(current.value.precipitationProbability) + '%',
  ]

  for (let id = 0; id < fields.length; id++) {
    details.push({id, text: fields[id]})
  }
}

function round(number: number|null|undefined) {
  return Math.round(number ?? 0)
}

onMounted(() => {
  setDetails()
})
</script>

<template>
  <section class="w-full">
    <div class="w-10/12 lg:w-8/12 mx-auto flex flex-col items-center gap-2 lg:gap-4">
      <CurrentIcon
          :code="icon"
          :description="`Ícone de ${current.description}`"
      />

      <CurrentWeather
          :description="`${current.description}`"
          :temperature="round(current.temperature)"
      />

      <CurrentDetailsList
          :details="details"
      />
    </div>
  </section>
</template>