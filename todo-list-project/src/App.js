import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Done from './pages/Done';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="d-flex">
          <Header />
          <hr />
          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/done" element={<Done />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
