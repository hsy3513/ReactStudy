import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Main from './pages/Main';
import UpdateView from './pages/UpdateView';
import Register from './pages/Register';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/member/update/view/:id" element={<UpdateView />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
