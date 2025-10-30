import { useState } from 'react';

export default () => {
  // 입력한 숫자들을 저장할 배열을 상태값으로 지정
  const [numbers, setNumbers] = useState([]);

  // 버튼 클릭했을 때 배열에 입력한 숫자를 저장하는 이벤트 함수를 만들어서 버튼에 처리
  const addNumber = () => {
    const txt = document.querySelector('input');

    // 값 입력 확인
    if (txt.value.trim() == '') {
      alert('입력한 값이 없습니다.');
      txt.value = '';
      return;
    }

    // 입력값이 숫자인 지 확인
    if (isNaN(txt.value)) {
      alert('숫자를 입력해주세요');
      txt.value = '';
      return;
    }

    // 배열에 숫자 추가
    // numbers.push(txt.value);
    setNumbers([...numbers, parseInt(txt.value)]);
    console.log(numbers);

    // 입력값 제거
    txt.value = '';
  };

  return (
    <>
      <input type="text" placeholder="숫자 입력" />
      <p>현재 입력 된 숫자 목록:{numbers.join(', ')}</p>
      <button onClick={addNumber}>숫자 추가</button>
      <p>
        입력된 숫자들의 평균:
        {numbers.length != 0 && (numbers.reduce((acc, cur) => acc + cur) / numbers.length).toFixed(2)}
      </p>
    </>
  );
};
