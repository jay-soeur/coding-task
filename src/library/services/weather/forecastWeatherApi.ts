/// <reference path="./../../../../typings/tsd.d.ts" />

import {WeatherServiceInterface} from "./weatherServiceInterface";
import {HttpRequestInterface} from "./../http-connection/httpRequestInterface";
import {WeatherInterface} from "./../../models/weatherInterface";
import {CoderInterface} from "./../coder/coderInterface";
import {JsonToWeatherMapperInterface} from "./../../mapper/jsonToWeatherMapperInterface";

export class ForecastWeatherApi implements WeatherServiceInterface {
    private url: string;

    private apiKey: string;

    private http: HttpRequestInterface;

    private coder: CoderInterface;

    private mapper: JsonToWeatherMapperInterface;

    private units: string = "us";

    constructor(
        http: HttpRequestInterface,
        coder: CoderInterface,
        mapper: JsonToWeatherMapperInterface,
        url: string,
        apiKey: string,
        units: string
    ) {
        this.url = url;
        this.apiKey = apiKey;
        this.http = http;
        this.coder = coder;
        this.mapper = mapper;
        this.units = units;
    }

    public getTemperatureInDegreeCelsiusByLatitudeAndLongitude(lat: number, long: number): Promise<WeatherInterface> {

        let self = this;

        return new Promise<WeatherInterface>((resolve, reject) => {
            let promise = this.http.get(this.url + this.apiKey + "/" + lat + "," + long + "?units=" + this.units);
            promise.then(function(data){
                try {
                    let weather = self.mapper.covert(self.coder.decode(data));
                    weather.setUnits(self.units);

                    if (typeof resolve === "function") {
                        resolve(weather);
                    }
                } catch (e) {
                    if (typeof reject === "function") {
                        reject(e);
                    }
                }
            });
        });
    }
}
