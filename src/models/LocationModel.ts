export class LocationModel {
  public address: string;
  public latitude: number;
  public longitude: number;
  public timezone: string;

  constructor(data?: any) {
    if (data) {
      this.address = data.address;
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.timezone = data.timezone;
    }
  }
}