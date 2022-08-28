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
      <div className="about__title__div">
        <h1 className="projects__explain__text">About Us</h1>
      </div>
      <div className="about_div">
        <row className="about__founder__div">
          <img
            className="project__full__image"
            alt="central"
            src="wide7.jpeg"
          />
        </row>
        <row className="about-text-container">
          <h1 className="about__explain__text mission__text about__explain__title__text">
            Our Mission
          </h1>
          <h2 className="about__explain__text about__explain__small__text mission__text">
            "From wind to gravity, the laws of physics rule how our planet
            works. Physics for the Planet was established to spread awareness of
            the role of physics in Earth’s future."
          </h2>
        </row>
      </div>
      <div className="about_mission_title_text">
        <h1 className="about__explain__text mission__text about__explain__title__text">
          Our Approach
        </h1>
      </div>
      <div className="about__explain__div">
        <div>
          <h2 className="paragraph__text">
            <h2 className="lato-text">
              <i>We believe knowledge comes from practical experience.</i>
              <br /> <br />
              We’ve designed our resources to establish an interactive pathway
              into the world of physics and nature. Through hands-on projects
              and live workshops, we aim to give young people the foundational
              knowledge and fiery determination to tackle the difficult issues
              facing our planet.
            </h2>
          </h2>
        </div>
        <div>
          <img
            className="project__full__image"
            alt="central"
            src="wide7.jpeg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}>
            Picture:
          </h2>
        </div>
      </div>
      <div className="about_grid_panel_header">
        <h3 className="about__explain__text about__explain__title__text mission__text">
          Meet The Team
        </h3>
      </div>
      <div className="about_grid_panels">
        <ul className="cards__items">
          <CardItem
            src="Founder_Portrait.jpg"
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
      </div>
    </div>
  );
}

export default Projects;
