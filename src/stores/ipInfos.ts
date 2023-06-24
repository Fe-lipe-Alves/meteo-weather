import {defineStore} from "pinia";
import {reactive} from "vue";
import {IpInfoModel} from "@/models/IpInfoModel";
import {consultInfoIp} from "@/services/consultInfoIp";

export const useIpInfoStore = defineStore('ipinfo', () => {
    const ipInfo = reactive({infos: new IpInfoModel()})

    async function loadInfos() {
        const response = await consultInfoIp()
        ipInfo.infos = new IpInfoModel(response)

    }

    return { ipInfo, loadInfos }
})