export default function ExComponent() {
  // class -> className, for -> htmlFor

  const imgStyle = {
    width: '200px',
    height: '200px',
    border: '1px solid black'
  };
  // document.querySelector('button').onclick = () => {
  //   alert('클릭');
  // }
  // 1. 반드시 루트 태그 하나로 구성
  // 2. 반드시 열린 태그와 닫힌 태그가 셋트로 구성
  // 3. 이벤트 처리 방식은 자바스크립트 스타일로 가능
  const func = () => alert('const func');
  // 4. 삼항 연산자로 조건부 렌더링이 가능
  const isLogin = true;
  // 5. 배열에 저장된 내용은 맵을 이용해서 출력
  const items = ['item1', 'item2', 'item3'];
  const arr = [<p>item1</p>, <p>item2</p>, <p>item3</p>]

  return (
    <>
      <h2>제목 영역</h2>
      {arr}
      <p>
        {items.map(obj => <li>{obj}</li>)}
      </p>
      <div>div 영역</div>
      <button onClick={ () => alert('경고경고') }>경고창</button>
      <button onClick={func}>2버튼</button>
      {isLogin ? <p>로그인 하셨습니다.</p> : <p>로그인 하셔야 합니다.</p>}
      {isLogin && <p>조건부 렌더링 테스트</p>}
      <div>
        <img src="" alt="" style={imgStyle} />
      </div>
    </>
  );
}

// ## JSX 규칙

// 1. 반드시 부모요소 태그 하나로 감싸야 된다.
// 2. JSX 안에서 자바스크립트 표현식을 쓸려면 {}로 묶어야 됨
// 3. {} 내에서는 반복문이랑 if문을 사용하지 않음, 필요시 삼항연산자는 사용 가능
// 4. CSS 적용시에도 카멜 표기법으로 작성해야함 (background-color —> backgroundColor)
// 5. JSX의 속성은 DOM 속성명(javascript 속성)을 따른다 → class 를 className으로 사용
// 6. 반드시 닫는 태그를 써야됨
// 7. 반드시 ‘’ “”로 묶지 않음

// 리턴에서 개행시 return; 효과이기에 ()로 그룹을 묶어줘야함 개행시는 ()를 씀