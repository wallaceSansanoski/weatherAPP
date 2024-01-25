const APIKey = 'HDzGAkrENIJwsIBFkA3SpI0qlWQYi4FR'

const getCityURL = inputValue =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${inputValue}&language=pt-br`

const getCityWeatherURL = Key =>
    `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const get5DaysForecastURL = Key =>
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error()
        }

        return response.json()
    } catch (error) {
        alert(error.message, error.name)
    }
}

const getCityInfo = city => fetchData(getCityURL(city))
const getConditionWeather = Key => fetchData(getCityWeatherURL(Key))
const get5DaysForecast = Key => fetchData(get5DaysForecastURL(Key))