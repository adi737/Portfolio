import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import WeatherContainer from './WeatherContainer.css';

const App = () => {
  console.log(`invoke weather-app`);

  const [city, setCity] = useState('');
  const divRef = useRef(null);

  const fetchWeatherData = async (key, city) => {
    const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},{state%20code}&appid=96f2d5e9f0bd472e45e0c005fc4f7901`);
    try {
      if (fetchData.ok) {
        const data = await fetchData.json();
        return data;
      } else throw new Error('City not found!');
    } catch (error) {
      console.log(error)
    }
  }

  const { status, data } = useQuery(['weather', city], fetchWeatherData, {
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (status === 'loading') {
      divRef.current.innerHTML = `
          <p>loading...</p>
        `
    } else {
      const weatherData = data || '';
      const name = weatherData ? `${weatherData.name} - current weather` : '';
      const temp = weatherData.main ? Math.round(weatherData.main.temp - 274.15) : '';
      const iconCode = weatherData ? weatherData.weather[0].icon : "";
      const iconURL = iconCode ? `http://openweathermap.org/img/wn/${iconCode}@2x.png` : '';
      const weatherDescription = weatherData ? weatherData.weather[0].description : '';

      divRef.current.innerHTML = `
          <p class='weather__name'>${name}</p>
          <p class='weather__description'>${weatherDescription}</p>
          ${iconURL ? `<img class='weather__img' src=${iconURL} alt='weather-icon' />` : ''}
          <p class='weather__temp'>${temp ? temp + '&degC' : ''}</p>
        `
    }
  }, [data, status]);


  const handleInput = useCallback(e => {
    setCity(e.target.value);
  }, [setCity]);

  return (
    <WeatherContainer>
      <input id='name' className='weather-input' type="text" onChange={handleInput} value={city} placeholder="Name" />
      <label htmlFor="name" className="weather-label">Name</label>
      <div className='weather' ref={divRef}>
      </div>
    </WeatherContainer>
  );
}

export default App;