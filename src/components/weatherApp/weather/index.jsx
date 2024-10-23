import { useEffect, useState } from "react"
import Search from "../search";
import '../styles.css'


function Weather() {

    const [search, setSearch] = useState('');
    const [WeatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchWeather(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=a587248c3068337e2242d0b8d8dc07c5`);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false)
                setSearch('')
            }
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    function handleSubmit() {
        fetchWeather(search)
    }

    function getCurrentDate () {
        return new Date().toLocaleDateString('en-us',{
            weekday:'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        })
    }

    useEffect(() => {
        fetchWeather('Bangalore')
    }, [])

    console.log(WeatherData)

    return (
        <div>
            <Search search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            {
                loading ?
                    <div className="loading">Loading...</div>
                    :
                    <div>
                        <div className="city-name">
                            <h2>
                                {WeatherData?.name}, <span>{WeatherData?.sys?.country}</span>
                            </h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className="temp">{WeatherData?.main?.temp}</div>
                        <p className="description">
                            {WeatherData && WeatherData.weather && WeatherData.weather[0] ? WeatherData.weather[0].description : ""}
                        </p>
                        <div className="weather-info">
                            <div className="column">
                                <div>
                                    <p className="wind">{WeatherData?.wind?.speed}</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <p className="humidity">{WeatherData?.main?.humidity}</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </div>
    )
}

export default Weather