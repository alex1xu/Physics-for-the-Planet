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
          How lightning works? Why climate change exists? Why anything works the
          way it does?
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
              path="/projects/wind"
              home={true}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="wide3.jpeg"
              text="Our Latest Blog"
              path="/blogs"
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
      <Row className="home_big_statement_div">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="./wide7.jpeg"
              style={{ borderRadius: "10px" }}
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <h5 className="about__explain__text home_smaller_statement_title">
              What We Do
            </h5>
            <p className="paragraph__text home_smaller_statement_text">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy.
            </p>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Home;
