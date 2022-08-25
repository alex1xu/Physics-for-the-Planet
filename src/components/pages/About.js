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
      <div className="about__founder__div">
        <div>
          <img
            className="project__full__image"
            alt="central"
            src="wide7.jpeg"
          />
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
      <div className="about_mission_title_text">
        <h1 className="about__explain__text mission__text about__explain__title__text">
          Our Approach
        </h1>
      </div>
      <div className="about__explain__div">
        <div>
          <h2 className="paragraph__text">
            <h2 className="lato-text">
              We believe knowledge comes from practical experience.
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
            Picture: klsdanvalknlvnlkjbdslk
          </h2>
        </div>
      </div>
      <div className="about_mission_title_text">
        <h1 className="about__explain__text mission__text about__explain__title__text">
          Message from the Founder
        </h1>
        <h2 className="about__founder__div">
          <h2 className="lato-text">
            As a Scout since I was a toddler, I’ve grown up appreciating the
            beauty of our natural world. From nights spent beneath the stars to
            ____, the outdoors is like a second home to me. When I discovered
            physics in high school, I was stunned at its ability to explain so
            much about the inner workings of our world. Suddenly, I began to see
            our planet from a different frame of view, and I grew even more
            appreciative about the beauty of its intricate and delicate
            complexity. Physics also allowed me to understand more about the
            problems facing our planet as well as the solutions. I founded
            Physics for the Planet to enable more people to grow passionate
            about nature and physics in the same way that I did.
          </h2>
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
      </div>
    </div>
  );
}

export default Projects;
