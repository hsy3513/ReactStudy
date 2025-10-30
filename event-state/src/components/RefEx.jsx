import { useRef, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const addStateCount = () => {
    setCount(count + 1);
  };

  // 일반 변수는 렌더링 될 때마다 초기화
  let n = 0;
  const refCount = useRef(0);
  const addRefCount = () => {
    refCount.current++;
    n++;
    console.log(refCount.current);
    console.log(n);
    console.log(txt.current.value);
  };

  // input tag에 연결
  const txt = useRef(null);

  return (
    <>
      <h2>Ref 예제</h2>
      <p>
        <input type="text" ref={txt} onChange={() => console.log(txt.current.value)} />
      </p>

      <button onClick={addRefCount}>ref 카운트 증가: {refCount.current}</button>
      <button onClick={addStateCount}>state 카운트 증가: {count}</button>
    </>
  );
};
