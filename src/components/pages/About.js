import Row from "react-bootstrap/Row";
import React, { useState, useLayoutEffect } from "react";
import Col from "react-bootstrap/Col";
import CardItem from "../CardItem";

function Projects() {
  return (
    <div>
      <div className="about__title__div">
        <h1 className="projects__explain__text">About Us</h1>
      </div>
      <div className="about_div">
        <img
          className="about__project__full__image"
          alt="central"
          src="wide7.jpeg"
        />
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
              into the world of physics and nature. Through hands-on projects,
              live workshops, and more, we aim to foster the foundational
              knowledge and fiery determination necessary to tackle the
              difficult issues facing our planet.
            </h2>
          </h2>
        </div>
        <div>
          <img
            className="project__full__image"
            alt="central"
            src="Our_Approach_Collage.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}></h2>
        </div>
      </div>
      <div className="about_mission_title_text">
        <h1 className="about__explain__text mission__text about__explain__title__text">
          Who We Are
        </h1>
      </div>
      <div className="about__explain__div">
        <div>
          <img
            className="project__full__image"
            alt="central"
            src="Group_Picture.jpg"
          />
          <h2 className="italics__text" style={{ margin: "1rem" }}></h2>
        </div>
        <div>
          <h2 className="whoweare__paragraph__text">
            <h2 className="lato-text">
              Hey!
              <br />
              <br />
              We're a group of Great Neck students who want to enable every
              member of our community to take action towards solving
              environmental issues. Making an impact should be accessible to
              everyone, regardless of their age or background. For many, physics
              can be a great way to understand the world around us and
              illuminate the path for each individual to change the world for
              the better.
              <br />
              <br />
              If you like what we're doing, please feel free to share our
              website or email us with any questions you may have!
              <br />
              <br />
              All the best,
              <br />
              The Physics for the Planet Team
            </h2>
          </h2>
        </div>
      </div>
      <div className="about_grid_panel_header">
        <h3 className="about__explain__text about__explain__title__text mission__text">
          Meet Our Team
        </h3>
      </div>
      <div className="about_grid_panels">
        <ul className="cards__items">
          <CardItem
            src="Rick_Headshot.jpg"
            name="Rick Xu"
            text="President"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Jack_Headshot.jpg"
            name="Jack Lenga"
            text="Director of Marketing"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Alex_Headshot.jpg"
            name="Alex Xu"
            text="Director of Technology"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Sam_Headshot.jpg"
            name="Samuel Lurvey"
            text="Project Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Amit_Headshot.jpg"
            name="Amit Saha"
            text="Outreach Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Sooah_Headshot.jpg"
            name="Sooah Kwak"
            text="Project Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Charles_Headshot.jpg"
            name="Charles Huang"
            text="Blog Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Matthew_Headshot.jpg"
            name="Matthew Tsui"
            text="Project Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Neal_Headshot.png"
            name="Neal Sodhi"
            text="Project Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Caden_Headshot.jpg"
            name="Caden Li"
            text="Project Team"
            path="/about"
            home={false}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="Richard_Headshot.jpg"
            name="Richard Oh"
            text="Project Team"
            path="/about"
            home={false}
          />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
