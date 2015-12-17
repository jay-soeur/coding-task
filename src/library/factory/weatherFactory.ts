import {WeatherFactoryInterface} from "./weatherFactoryInterface";
import {WeatherInterface} from "./../models/weatherInterface";
import {Weather} from "./../models/weather";

export class WeatherFactory implements WeatherFactoryInterface {

    public create(): WeatherInterface {
        return new Weather();
    }

}
