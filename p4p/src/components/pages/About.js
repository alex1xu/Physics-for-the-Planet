import Row from "react-bootstrap/Row";
import React, { useState, useLayoutEffect } from "react";
import Col from "react-bootstrap/Col";
import CardItem from "../CardItem";

function Projects() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">About Us</h1>
          <h2 className="about__explain__text about__explain__small__text">
            We do this and that for these people We do this and that for these
            people We do this and that for these people We do this and that for
            these people We do this and that for these people We do this and
            that for these people We do this and that for these people We do
            this and that for these people We do this and that for these people
            We do this and that for these people
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="central"
            src="founder2.jpeg"
          />
          <h2
            className="about__explain__text about__explain__small__text"
            style={{ margin: "1rem" }}
          >
            Picture: klsdanvalknlvnlkjbdslk
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="about__explain__text mission__text">Our Mission</h1>
        <h2 className="about__explain__text about__explain__small__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
      </div>
      <div className="home_grid_panels">
        <ul className="cards__items">
          <CardItem
            src="founder.jpeg"
            name="Joe Biden"
            text="Founder and CEO"
            path="/about"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="founder.jpeg"
            name="Riggie shoe"
            text="Dishwasher lmfao"
            path="/about"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="founder.jpeg"
            name="Riggie shoe #2"
            text="Director of dishwashers"
            path="/about"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="founder.jpeg"
            name="Riggie shoe #2"
            text="Director of dishwashers"
            path="/about"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="founder.jpeg"
            name="Riggie shoe #2"
            text="Director of dishwashers"
            path="/about"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="founder.jpeg"
            name="Riggie shoe #2"
            text="Director of dishwashers"
            path="/about"
          />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
