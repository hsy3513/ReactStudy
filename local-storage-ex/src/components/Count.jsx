import { useState } from 'react';

export default () => {
  // localStorage에서 count 값을 읽어와서 상태값을 초기화
  // 단, 없어서 null 일 경우 0으로 초기화
  
  // const [count, setCount] = useState(localStorage.getItem('count') == null ? 0 : parseInt(localStorage.getItem('count')));
  const [count, setCount] = useState(() => {
    const localCount = localStorage.getItem('count');
    return localCount == null ? 0 : parseInt(localCount);
  });
  
  // localStorage.getItem(키값);
  // localStorage.setItem(키값, 데이터);
  // count로 localStorage 값을 확인
  console.log(localStorage.getItem('count'));

  // count가 증가/감소 시 localStorage에 count 저장
  const addCount = () => {
    setCount((prev) => {
      localStorage.setItem('count', prev + 1);
      return prev + 1;
    });
  };

  const minusCount = () => {
    setCount((prev) => {
      localStorage.setItem('count', prev - 1);
      return prev - 1;
    });
  };
  return (
    <>
      <h2>Counter</h2>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
      <br />
      <p>count: {count}</p>
    </>
  );
};
