import React, { useState, useLayoutEffect, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "../CardItem";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="home_div">
        <Carousel
          controls={false}
          indicators={false}
          wrap
          slide
          touch
          interval={5000}
          className="carousel-size"
        >
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-size"
              src="wide7.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-size"
              src="wide3.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-size"
              src="wide6.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Row className="swiper-text-container">
          <h4 className="swiper-text">Have You Ever Wondered...</h4>
          <p className="swiper-paragraph">
            How lightning works? Why climate change exists? Why anything works
            the way it does?
          </p>
          <p className="swiper-paragraph">
            Well, <b>physics</b> answers all that. And more.
          </p>
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--block"
            onClick={() => navigate("/projects")}
          >
            See How
          </Button>
        </Row>
      </div>
      <Row className="projects__explain__div">
        <div className="about__explain__text home_smaller_statement_title remove-300">
          Not sure where to start?
        </div>
      </Row>
      <Row className="cards remove-300" style={{ margin: "0" }}>
        <div className="home_grid_panels">
          <ul className="cards__items">
            <CardItem
              src="Wind_Turbine_Step_6.jpg"
              text="Our Latest Project"
              path="/projects/diy_wind_turbine"
              home={true}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="Flower_Turbine_Header.jpg"
              text="Our Latest Blog"
              path="/blogs/flower_turbine"
              home={true}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="wide6.jpeg"
              text="Learn About Us"
              path="/about"
              home={true}
            />
          </ul>
        </div>
      </Row>
      <div className="home_founder_div">
        <div className="home__founder__image__div">
          <img
            className="home__founder__image"
            alt="central"
            src="Founder_Portrait.jpg"
          />
        </div>
        <div classsName="home__founder__explain__div">
          <h2 className="paragraph__text">
            <h2 className="lato-text">
              Rick Xu is the Founder and President of Physics for the Planet. As
              a lifelong Scout and overall outdoor enthusiast, he has always
              sought to improve the planet we call home. His discovery of his
              passion for physics in high school allowed him to understand
              nature at a deeper level, further growing his appreciation for the
              outdoors and his determination to preserve it. So, Rick decided to
              create an organization where he could spread his passion to others
              through interactive and educational projects.
            </h2>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
