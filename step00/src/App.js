import './App.css';
import { plus, minus } from './func/math';
import mylog, { multi } from './func/log';
import ExComponent from './jsx/ExComponent';
import NoJSX from './jsx/NoJSX';

function App() {
  let sum = plus(100, 200);
  let dis = minus(300, 100);
  let mul = multi(5, 3);
  mylog('우리가 만들 로그 함수');
  return (
    <div className="App">
      <NoJSX />
      <h2>제목 태그 ㅎㅇㅎㅇ</h2>
      <p>안농요</p>
      <p>덧셈 결과: {sum}</p>
      <p>뺄셈 결과: {dis}</p>
      <p>곱셈 결과: {mul}</p>

      <ExComponent />
    </div>
  );
}

export default App;
