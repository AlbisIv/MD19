// npm i axios
// npm install react-router-dom@6
// redux
// npm install @types/react-redux
// TODO katram span elementam atsevišķi pielikt izmaināmu ciparu
// TODO uz pogas pievienot/izmainīt reduxa masīvu
// TODO Izveidot redux globālos states priekš katra produkta skaita,
// TODO
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import CartPage from './pages/cartPage/cartPage';
import Page404 from './pages/page404/page404';

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <NavLink className={({ isActive }) => (isActive ? 'link link--active' : 'link')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link link--active' : 'link')} to="/cart">Cart</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Page404 />} />

    </Routes>
  </Router>
);

export default App;
