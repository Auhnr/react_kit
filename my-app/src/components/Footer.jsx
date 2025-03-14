import React from "react";
import "./NumberPage.css";
import Logo from "../image/logo.png";


function Footer() {
    return (
        <footer>
          <div className="header">
            <img src={Logo} alt="logo" />
            <nav className="navbar">
              <a className="navbar__item" href="#why-us">Почему мы?</a>
              <a className="navbar__item" href="#numbers">Номера</a>
              <a className="navbar__item" href="#reviews">Отзывы</a>
              <a className="navbar__item" href="#how-to-find-us">Как нас найти</a>
            </nav>
          </div>
          <hr />
          <div className="footer__info">
            <p>2019 Все права защищены</p>
            <p>Политика конфиденциальности</p>
          </div>
        </footer>
    );
}

export default Footer;
