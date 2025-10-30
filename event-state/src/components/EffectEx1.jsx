import { useEffect, useState } from 'react';

export default () => {
  const [today, setToday] = useState(new Date().toLocaleString());
  const [count, setCount] = useState(0);

  console.log('EffectEx1 컴포넌트 랜더링');

  // 의존성 배열을 추가하지 않으면
  // 매번 랜더링 될 때마다 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     setToday(new Date().toLocaleString());
  //   }, 1000);
  // });
  
  // 의존성 배열이 추가된 경우
  // [] 넣고, 상태값을 안넣으면(반배열) 랜더링이 아무리 일어나도
  // 해당 코드는 한번만 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     setToday(new Date().toLocaleString());
  //   }, 5000);
  // }, []);

  // 의존성 배열에 상태값을 넣으면
  // 해당 상태값이 바뀌어서 렌더링 될 때만 실행
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date().toLocaleString());
    }, 5000);
  }, [count]);

  return (
    <div>
      <h2>Effect 예제 - 1</h2>
      <p>현재 날짜 시간: {today}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가: {count}</button>
    </div>
  );
};
