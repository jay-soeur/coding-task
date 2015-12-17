import {WeatherInterface} from "./../models/weatherInterface";

export interface WeatherFactoryInterface {
    create(): WeatherInterface;
}
