import React, { useState, useLayoutEffect, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "../CardItem";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div className="home_div">
        <Carousel
          controls={false}
          indicators={false}
          wrap
          slide
          touch
          interval={4000}
          className="carousel-size"
        >
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-size skeleton"
              src="Troop_10_1.jpg"
              alt="First Slide"
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
        <Row className="swiper-text-container">
          <h4 className="swiper-text">Making Physics Real.</h4>
          <p className="swiper-paragraph">
            We're bridging students and the magnetic world of physics together,
            one project and workshop at a time.
          </p>
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--block"
            onClick={() => navigate("/projects")}
          >
            Project Guides
          </Button>
        </Row>
      </div>
      <div className="projects__explain__div">
        <div className="home__news__title remove-300">As seen on:</div>
        <div className="home_seen_on_div">
          <img
            src="LogoCNN.png"
            loading="lazy"
            alt="CNN"
            class="home_seen_on_img_wrapper"
          ></img>
          <img
            src="LogoGoogle.webp"
            loading="lazy"
            alt="Google"
            class="home_seen_on_img_wrapper"
          ></img>
          <img
            src="FOX_Logo.png"
            loading="lazy"
            alt="Google"
            class="home_seen_on_img_wrapper"
          ></img>
          <img
            src="NBC_Logo.png"
            loading="lazy"
            alt="Google"
            class="home_seen_on_img_wrapper"
          ></img>
          <img
            src="Digital_Journal_Logo.png"
            loading="lazy"
            alt="Google"
            class="home_seen_on_img_wrapper"
          ></img>
        </div>
      </div>
      <div className="projects__explain__div">
        <div className="home__about__explain__text home_smaller_statement_title remove-300">
          Not sure where to start?
        </div>
      </div>
      <Row className="cards remove-300" style={{ margin: "0" }}>
        <div className="home_grid_panels">
          <ul className="cards__items">
            <CardItem
              src="Solar_Car_Step_20.jpg"
              text="Our Latest Project"
              path="/projects/solar_car"
              home
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="Troop_10_3.jpg"
              text="Our Latest Workshop"
              path="/blogs/workshop_troop_10"
              home
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="Nuclear_Barges_Header.jpg"
              text="Our Latest Blog"
              path="/blogs/nuclear_barges"
              home
            />
          </ul>
        </div>
      </Row>
      <div className="home_founder_div">
        <div className="home__founder__image__div">
          <img
            className="home__founder__image  skeleton"
            alt="central"
            src="Rick_Headshot.jpg"
            loading="lazy"
          />
        </div>
        <div classsName="home__founder__explain__div">
          <h2 className="home__paragraph__text">
            <h2 className="lato-text">
              Rick Xu is the Founder and President of Physics for the Planet. As
              a lifelong Scout and overall outdoor enthusiast, he has always
              sought to improve the planet we call home. His discovery of his
              passion for physics in high school allowed him to understand
              nature at a deeper level, further growing his appreciation for the
              outdoors and his determination to preserve it. So, Rick decided to
              create an organization where he could spread his passion to others
              through interactive and educational activities.
            </h2>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
