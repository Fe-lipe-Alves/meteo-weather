<template>
    <div
        class="lg:w-96 pb-2 rounded-[1.4rem] relative"
        :class="{'rounded-b-none bg-cultured': isFocus}"
    >
        <input
            type="text"
            value="Presidente Prudente"
            autocomplete="off"
            class="w-full rounded-[1.4rem] shadow px-8 py-2 text-center text-lg focus:outline-none bg-cultured/70"
            :class="{'bg-white': isFocus}"
            @focusin="setFocus(true)"
            @focusout="setFocus(false)"
        >

        <div
            class="w-full mt-2 list bg-inherit absolute rounded-b-[1.4rem] overflow-hidden z-10"
            v-show="isFocus"
        >
            <ul>
                <li
                    class="px-5 lg:px-8 py-2 text-sm hover:bg-white truncate"
                    v-for="(city, index) in cities"
                    :key="index"
                >
                    {{ city }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";

const cities = [
    'São Paulo, SP - Brasil',
    'Porto Alegre, RS - Brasil',
    'São Paulo, SP - Brasil',
    'Porto Alegre, RS - Brasil',
]

const search = ref('')
const isFocus = ref(false)

function setFocus(value) {
    isFocus.value = value
}

onMounted(() => {
    search.value = 'Presidente Prudente'
})
</script>

<style scoped>

</style>