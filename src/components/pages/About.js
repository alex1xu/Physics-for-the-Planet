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
          <h1 className="projects__explain__text">About Us</h1>
          <h2 className="paragraph__text">
            <h2 className="lato-text">
              We do this and that for these people We do this and that for these
              people We do this and that for these people We do this and that
              for these people We do this and that for these people We do this
              and that for these people We do this and that for these people We
              do this and that for these people We do this and that for these
              people We do this and that for these people
            </h2>
          </h2>
        </div>
        <div>
          <img className="about__full__image" alt="central" src="wide7.jpeg" />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Picture: klsdanvalknlvnlkjbdslk
          </h2>
        </div>
      </div>
      <div className="about_mission_title_text">
        <h1 className="about__explain__text mission__text about__explain__title__text">
          Our Mission
        </h1>
      </div>
      <div className="mission__div">
        <h2 className="about__explain__text about__explain__small__text mission__text">
          "From wind to gravity, the laws of physics rule how our planet works.
          Physics for the Planet is a platform designed to spread awareness of
          the role of physics in Earth’s future."
        </h2>
      </div>
      <div className="about_grid_panel_header">
        <h3 className="about__explain__text about__explain__title__text mission__text">
          Meet The Team
        </h3>
      </div>
      <div className="about_grid_panels">
        <ul className="cards__items">
          <CardItem
            src="wide3.jpeg"
            name="Rick Xu"
            text="President"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="wide3.jpeg"
            name="Person 2"
            text="Vice President"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="wide3.jpeg"
            name="Person 3"
            text="Director of Outreach"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="wide3.jpeg"
            name="Person 4"
            text="Director of Operations"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="wide3.jpeg"
            name="Person 5"
            text="Secretary"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="wide3.jpeg"
            name="Person 6"
            text="Treasurer"
            path="/about"
            home={false}
          />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
