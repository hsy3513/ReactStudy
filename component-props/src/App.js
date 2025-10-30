import ButtonOK from './components/ButtonOK';
import ItemList from './components/ItemList';

function App() {
  const profile = [
    { name: 'Alex', age: 20, job: 'developer' },
    { name: 'Bob', age: 17, job: 'student' },
    { name: 'Charlie', age: 25, job: 'designer' },
    { name: 'David', age: 30, job: 'developer' },
    { name: 'Ethan', age: 15, job: 'student' },
  ];

  return (
    <div className="App">
      <h1>Component Props</h1>
      <ButtonOK attr1="속성1" data="데이터" var1="확인" />
      <hr />
      <ItemList profiles={profile} />
    </div>
  );
}

export default App;
