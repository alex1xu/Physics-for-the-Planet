import React, { useState, useLayoutEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "../CardItem";
import Carousel from "react-bootstrap/Carousel";

function Home() {
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
          <Carousel.Caption>
            <h3>Your Planet Needs You</h3>
            <p>Learn More</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-size"
            src="wide3.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Your Planet Needs You</h3>
            <p>Learn More</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-size"
            src="wide6.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Your Planet Needs You</h3>
            <p>Learn More</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row className="swiper-text-container">
        <h4 className="swiper-text">Welcome to Physics for the Planet</h4>
      </Row>
      <Row className="projects__explain__div">
        <div className="home__projects__explain__text remove-300">
          Not sure where to start?
        </div>
      </Row>
      <Row className="cards remove-300">
        <div className="home_grid_panels">
          <ul className="cards__items">
            <CardItem
              src="founder.jpeg"
              text="Latest Project"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem src="founder.jpeg" text="Latest Blog" path="/blogs" />
          </ul>
          <ul className="cards__items remove-when-shrink">
            <CardItem src="founder.jpeg" text="Volunteer" path="/projects" />
          </ul>
        </div>
      </Row>
      <Row className="home_big_statement_div">
        <div className="home_big_statement_container">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="./founder.jpeg" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <h5 className="home_big_statement_title">We love little kids</h5>
              <p className="home_big_statement_text">
                plzplzpzlpzlzplzplzplzpzlpzlpzlpzlpzlpzlzplzplzplzplzplzplzplzplzplzplzpl
              </p>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Home;
