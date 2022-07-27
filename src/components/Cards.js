import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these epic destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../assets/place-1.jpg"
              text="Explore the hidden place"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../assets/place-2.jpg"
              text="Explore the other cool place"
              label="Tourism"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../assets/place-3.jpg"
              text="Seek for new things"
              label="Exploring"
              path="/services"
            />
            <CardItem
              src="../assets/place-2.jpg"
              text="See new destinations"
              label="Traveling"
              path="/services"
            />
            <CardItem
              src="../assets/place-4.jpg"
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
