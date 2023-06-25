export class IpInfoModel {
  public ip: string
  public hostname: string
  public city: string
  public region: string
  public country: string
  public loc: string
  public org: string
  public postal: string
  public timezone: string

  public constructor(data?: any) {
    Object.assign(this, data)
  }
}
