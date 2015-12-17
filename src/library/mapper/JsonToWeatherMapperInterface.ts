import {WeatherInterface} from "./../models/WeatherInterface";

export interface JsonToWeatherMapperInterface {
    covert(data: string): WeatherInterface;
}
