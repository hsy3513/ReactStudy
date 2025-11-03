import { useEffect } from 'react';
import axios from 'axios';
export default () => {
  useEffect(() => {
    axios
      .post('http://localhost:9999/car/search/post', {
        kind: 'cname',
        search: 'Jetta',
      })
      .then((reseponse) => {
        console.log(reseponse);
      })
      .catch((err) => {
        console.log(err);
      });
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
