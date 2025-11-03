import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Board from './pages/Board';
import Post from './pages/Post';
import ProductList from './pages/ProductList';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Routes>
        {/* 기본 경로 : / */}
        <Route path="/" element={<Home />} />
        {/* /about 경로 */}
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="company" element={<h2>company</h2>} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/board" element={<Board />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
