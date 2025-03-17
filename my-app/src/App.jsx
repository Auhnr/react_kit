import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/HomePage";
import Numbers from "./components/NumberPage"; // Каталог
import About from "./components/AboutPage";
import Logo from "./image/logo.png";
import buttonForMobHeader from "./image/mobile_image/for_header.png";

function App() {
  return (
    <HashRouter>
      <header className="header">
        <img src={Logo} alt="logo" />
        <nav className="navbar">
          <Link className="navbar__item" to="/">Главная</Link>
          <Link className="navbar__item" to="/numbers">Номера</Link> {/* Исправлено */}
          <Link className="navbar__item" to="/about">О нас</Link> {/* Исправлено */}
          <img src={buttonForMobHeader} alt="button_for_mobile_header" />
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/numbers" element={<Numbers />} /> {/* Каталог */}
        <Route path="/about" element={<About />} /> {/* О нас */}
      </Routes>

    </HashRouter>
  );
}

export default App;
