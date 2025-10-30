import { useEffect, useRef, useState } from 'react';
const API_KEY = '9fc81e1dbb493ac70fada41e7830bd54';

export default () => {
  const [weather, setWeather] = useState(null);
  const city = useRef(null);

  const callWeather = async () => {
    if (!city.current.value) {
      alert('도시명을 입력하세요');
      return;
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=${API_KEY}&lang=kr&units=metric`);
    const data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setWeather(data);
    });
     
  }, []);

  return (
    <div>
      <input type="text" ref={city} placeholder="도시명 입력" />
      <button onClick={callWeather}>날씨 조회</button>
      {weather && (
        <div>
          <p>도시명: {weather.weather[0].description}</p>
          <p>현재 날씨: {weather.weather[0].description}</p>
          <p>온도: {weather.main.temp}°C</p>
        </div>
      )}
      {!weather && <p>날씨 정보를 불러오는 중입니다...</p>}
    </div>
  );
};
