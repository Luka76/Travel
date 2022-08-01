import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../assets/place-1.jpg";
import img2 from "../assets/place-2.jpg";
import img3 from "../assets/place-3.jpg";
import img4 from "../assets/place-4.jpg";
import img5 from "../assets/place-5.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Explore the hidden treasures"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Find cool places and forget everything for a moment"
              label="Tourism"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Seek for new things"
              label="Exploring"
              path="/services"
            />
            <CardItem
              src={img4}
              text="See new destinations"
              label="Traveling"
              path="/services"
            />
            <CardItem
              src={img5}
              text="Never get tired"
              label="Sightseeing"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
