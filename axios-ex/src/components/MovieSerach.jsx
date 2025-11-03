import axios from 'axios';
import { useRef, useState } from 'react';

export default () => {
  const txt = useRef(null);
  const [movieList, setMovieList] = useState([]);
  const callSearchMovie = async () => {
    try {
      const API_KEY = process.env.REACT_APP_KOBIS_API_KEY;
      const response = await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json', {
        params: {
          key: API_KEY,
          movieNm: txt.current.value.trim(),
        },
      });
      const data = response.data;
      console.log(data);
      setMovieList(data.movieListResult.movieList);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h2>영화명으로 검색</h2>
      <p>
        <input type="text" ref={txt} />
        <button onClick={callSearchMovie}>검색</button>
      </p>
      <hr />
      {movieList.map((item) => (
        <p key={item.movieCd}>
          {item.movieNm} / {item.prdtYear} /{item.openDt} / {item.directors.reduce((acc, obj) => `${obj.peopleNm} ${acc}`, '')}
        </p>
      ))}
    </div>
  );
};
