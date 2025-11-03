import axios from 'axios';
import { useRef, useState } from 'react';

export default () => {
  const API_KEY = '88d7a2e6de4e692fd069399f03aae46c';
  const date = useRef(null);
  const [boxOffice, setBoxOffice] = useState([]);
  const callKobis = async () => {
    //날짜에 있는 - 를 제거
    console.log(date.current.value.replaceAll('-', ''));
    const response = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml`, {
      params: {
        key: API_KEY,
        targetDt: date.current.value.replaceAll('-', ''),
      },
      responseType: 'document',
    });
    const data = response.data;
    console.log('파싱전', data);
    // //XML 파싱해주는 객체
    // const parser = new DOMParser();
    // const xmlData = parser.parseFromString(data, 'text/xml');
    // console.log(xmlData);
    setBoxOffice([]);
    const tmp = [];
    data.querySelectorAll('dailyBoxOffice').forEach((item) => {
      const rank = item.querySelector('rank').textContent;
      const movieNm = item.querySelector('movieNm').textContent;
      const openDt = item.querySelector('openDt').textContent;
      const audiAcc = item.querySelector('audiAcc').textContent;
      tmp.push({ rank: rank, movieNm: movieNm, openDt: openDt, audiAcc: audiAcc });
    });
    setBoxOffice(tmp);
  };
  console.log(boxOffice);
  return (
    <div>
      <h2>일일 박스오피스</h2>
      <input type="date" ref={date} />
      <button onClick={callKobis}>조회</button>
      <hr />
      <div id="area">
        {boxOffice.map((item, idx) => (
          <p key={idx}>
            {item.rank} / {item.movieNm} / {item.openDt} / {item.audiAcc}
          </p>
        ))}
      </div>
    </div>
  );
};
