import { useState } from 'react';

export default () => {
  // 상태값으로 지정되지 않으면 컴포넌트가 렌더링 되지 않음
  // let count = 0;
  // state 사용 방법
  const [count, setCount] = useState(0);
  console.log('Counter 렌더링');
  // function minus() {
  //   setCount(count - 1);
  // }
  const minus = function () {
    setCount(count - 1);
  };
  return (
    <>
      <h2>Counter 예제</h2>
      <div>
        <button onClick={minus}>-</button>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};
