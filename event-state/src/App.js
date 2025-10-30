import './App.css';
import Counter from './components/Counter';
import NumberList from './components/NumberList';
import SignUp from './components/RegistComponent';
import TimeView from './components/TimeView';
import Ref from './components/RefEx';
import EffectEx1 from './components/EffectEx1';
import EffectEx2 from './components/EffectEx2';
import ReducerEx from './components/ReducerEx';

function App() {
  console.log('App.js 랜더링');
  return (
    <div className="App">
      {/* <h2>State & Event</h2>
      <NumberList />
      <Counter />
      <hr />
      <TimeView />
      <SignUp /> 
      <Ref /> 
      <EffectEx1 />
      <EffectEx2 /> */}
      <ReducerEx />
    </div>
  );
}

export default App;
