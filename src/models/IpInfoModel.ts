export class IpInfoModel {
    public status?: string
    public country?: string
    public countryCode?: string
    public region?: string
    public regionName?: string
    public city?: string
    public zip?: string
    public lat?: number
    public lon?: number
    public timezone?: string
    public isp?: string
    public org?: string
    public as?: string
    public query?: string

    public constructor(data?: any) {
        Object.assign(this, data);
    }
}