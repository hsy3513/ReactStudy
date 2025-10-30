import { useEffect } from 'react';
import axios from 'axios';

export default () => {
  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', { params: { appid: '9fc81e1dbb493ac70fada41e7830bd54', q: 'Seoul', units: 'metric' } })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();
  }, []);
  return (
    <div>
      <h2>
        날씨 정보 조회<button>날씨 정보 가져오기</button>
      </h2>

      <hr />
      <div className="weather-info"></div>
    </div>
  );
};
