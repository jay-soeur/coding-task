import {WeatherInterface} from "./../../models/weatherInterface";

export interface WeatherServiceInterface {
  getTemperatureInDegreeCelsiusByLatitudeAndLongitude(lat: number, long: number): Promise<WeatherInterface>;
}
