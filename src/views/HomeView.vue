<template>
    <HeaderPage/>
    <main>
        <div class="w-full">
            <div class="w-full mx-auto flex flex-col item-center gap-4 py-4">
                <div class="flex justify-center gap-16">
                    <div class="flex justify-center items-center">
                        <img src="./../assets/tomorrow-icons/v2/large/png/10001_clear_large.png" alt="">
                    </div>

                    <div>
                        <div class="h-fit flex justify-center items-center px-8 gap-4 py-2 bg-zinc-50 rounded-full backdrop-blur-sm ">
                            <span class="text-4xl">32°</span>
                            <span class="border-l w-[1px] h-4 border-black-olive"></span>
                            <span>Chuva leve</span>
                        </div>
                    </div>
                </div>

                <div class="w-full flex justify-center">
                    <div class="bg-cultured mt-4 flex gap-8 text-center font-medium text-black-olive text-sm px-8 py-1 rounded-md">
                        <span>Sensação 30°</span>
                        <span>Vento 5 km/h</span>
                        <span>Umidade 60%</span>
                        <span>Chance de chuva 5%</span>
                    </div>
                </div>
            </div>

            
        </div>
    </main>
</template>

<script lang="ts" setup>
import HeaderPage from "@/components/HeaderPage.vue";
</script>

<style scoped>

</style>