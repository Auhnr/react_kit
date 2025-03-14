import React from "react";
import "./NumberPage.css";
import Howtofindus from "./Howtofindus.jsx";
import Baner from "./Baner.jsx";


import paw from "../image/icons/paw_white.png";
import vector from "../image/catalog_images/Vector.png";
import vector1 from "../image/catalog_images/Vector1.png";
import vector2 from "../image/catalog_images/Vector2.png";
import vector3 from "../image/catalog_images/Vector3.png";
import vectorHome from "../image/about_images/domik.png";

import cat1log from "../image/catalog_images/китик1.png";
import cat2log from "../image/catalog_images/китик2.png";
import cat3log from "../image/catalog_images/китик3.png";
import cat4log from "../image/catalog_images/китик4.png";
import cat5log from "../image/catalog_images/китик5.png";
import cat6log from "../image/catalog_images/китик6.png";
import Footer from "./footer.jsx";

const rooms = [
  {
    img: cat1log,
    name: "Эконом",
    size: "90х70х180 см",
    area: "0,63 м2",
    price: "100₽",
    features: [vector],
  },
  {
    img: cat2log,
    name: "Эконом плюс",
    size: "90х100х180 см",
    area: "0,90 м2",
    price: "200₽",
    features: [vector3, vector1],
  },
  {
    img: cat3log,
    name: "Комфорт",
    size: "100х125х180 см",
    area: "1,13 м2",
    price: "250₽",
    features: [vector3, vector1, vector2],
  },
  {
    img: cat4log,
    name: "Супер-Люкс",
    size: "180х160х180 см",
    area: "2,88 м2",
    price: "600₽",
    features: [vector3, vector1, vector2, vectorHome],
  },
  {
    img: cat5log,
    name: "Сьют",
    size: "125х125х180 см",
    area: "1,56 м2",
    price: "350₽",
    features: [vector3, vector1, vector2],
  },
  {
    img: cat6log,
    name: "Люкс",
    size: "160х160х180 см",
    area: "2,56 м2",
    price: "500₽",
    features: [vector3, vector1, vector2, vectorHome],
  },
  {
    img: cat1log,
    name: "Эконом",
    size: "90х70х180 см",
    area: "0,63 м2",
    price: "100₽",
    features: [vector],
  },
  {
    img: cat2log,
    name: "Эконом плюс",
    size: "90х100х180 см",
    area: "0,90 м2",
    price: "200₽",
    features: [vector3, vector1],
  },
];

function NumberPage() {
    return (
      <> {/* Фрагмент вместо отдельного div */}
        <div className="catalog">
          <h2>Наши номера</h2>
          <div className="rooms">
            {rooms.map((room, index) => (
              <article key={index} className="room_">
                <img src={room.img} alt={room.name} className="room-image" />
                <p className="room-name">{room.name}</p>
                <div className="room-details">
                  <span className="room-size">Размеры (ШхГхВ) - {room.size}</span>
                  <span className="room-area">Площадь - {room.area}</span>
                  <span className="room-features">
                    Оснащение номера{" "}
                    {room.features.map((feature, i) => (
                      <img
                        key={i}
                        src={feature}
                        alt="Оснащение"
                        className="feature-icon"
                      />
                    ))}
                  </span>
                  <span className="room-price">
                    Цена за сутки: <p>{room.price}</p>
                  </span>
                </div>
                <button className="book-button">
                  Забронировать <img src={paw} alt="paw" className="paw-icon" />
                </button>
              </article> 
            ))}
          </div>
        </div>
        <Baner />
        <Howtofindus />
        <Footer />

      </>
    );
  }
  

export default NumberPage;
