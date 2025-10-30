import { useReducer, useRef } from 'react';

// 상태값을 제어하는 함수
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'ADDNUMBER':
      return { value: state.value + action.payload };
  }
}

export default () => {
  const [count, dispatch] = useReducer(reducer, { value: 0 });
  const num = useRef(null);
  return (
    <div>
      <h2>reducer 예제</h2>
      <p>count: {count.value}</p>
      <p>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-</button>
      </p>
      <p>
        <input type="number" ref={num} />
        <button onClick={() => dispatch({ type: 'ADDNUMBER', payload: parseInt(num.current.value) })}>add</button>
      </p>
    </div>
  );
};
