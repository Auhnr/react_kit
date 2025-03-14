import cat1 from "../image/about_images/котя1.png";
import cat2 from "../image/about_images/котя2.png";
import cat3 from "../image/about_images/котя3.png";
import big_cat from "../image/about_images/большой_котя.png";
import lezhak from "../image/about_images/lezhak.png";
import domik from "../image/about_images/domik.png";
import play_complex from "../image/about_images/play_complex.png";
import kogtetochka from "../image/about_images/kogtetochka.png";
import pawTwo from '../image/icons/paw_white.png'
import catTwo from '../image/image1.png'

import Howtofindus from "./Howtofindus.jsx";
import Footer from "./footer.jsx";


import "./AboutPage.css";
import "./HomePage.css";

function AboutPage() {
  return (
    <><section className="about__lux">

      <div className="about__lux_image">
        <div className="mini__cat_container">
          <img className="mini__cat_img" src={cat1} alt="котя1" />
          <img className="mini__cat_img" src={cat2} alt="котя2" />
          <img className="mini__cat_img" src={cat3} alt="котя3" />
        </div>
        <img className="big__cat_img" src={big_cat} alt="большой_котя" />
      </div>

      <div className="room-card">
        <h2 className="room-title">Супер-Люкс</h2>
        <p className="room-size">Размеры (ШхГхВ) - 180x160x180 см</p>
        <p className="room-area">Площадь - 2,88 м²</p>
        <h3 className="features-title">Оснащение номера</h3>

        <ul className="features-list">

          <li className="feature-item">
            <img className="feature_img" src={lezhak} alt="лежак" /> Лежак
          </li>

          <li className="feature-item">
            <img className="feature_img" src={domik} alt="domik" /> Домик
          </li>

          <li className="feature-item">
            <img className="feature_img" src={play_complex} alt="play_complex" />Игровой комплекс - 3 яруса
          </li>

          <li className="feature-item">
            <img className="feature_img" src={kogtetochka} alt="kogtetochka" /> Когтеточка
          </li>
        </ul>

        <p className="room-price">
          Цена за сутки: <span className="price-value">600₽</span>
        </p>

        <button className="room-button">
          <span className="room-button__text">Забронировать</span>
          <img className="room-button__item" src={pawTwo} alt="paw" width="35px" height="35px" />
        </button>
      </div>
    </section>
    
    <section className="container" id="numbers">
        <h3 className="container__title">Номера</h3>
        <div className="container__content">
          <img className="container__img" src={catTwo} alt="cat" />
          <div className="container__apartment">
            <h5 className="container__apartment--title">Эконом плюс</h5>
            <ul className="list--info">
              <li><span className="bullet"></span> <strong>Площадь</strong> — 0,90 м²</li>
              <li><span className="bullet"></span> <strong>Размеры (Ш×Г×В)</strong> — 90×100×180 см</li>
              <li><span className="bullet"></span> <strong>Цена за сутки</strong>: 200₽</li>
            </ul>
            <button className="button">
              <span className="button__text">Забронировать</span>
              <img className="button__item" src={pawTwo} alt="paw" width="35px" height="35px" />
            </button>
          </div>
        </div>
      </section>

      <Howtofindus />
      <Footer />

        
      </>
  );
}

export default AboutPage;
