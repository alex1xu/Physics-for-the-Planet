import React from "react";
import { Button } from "./Button";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Contact us!</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="body"
              type="body"
              placeholder="Message"
            />
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--primary">Send Email</Button>
          </form>
        </div>
      </section>
      <Row className="social-media" style={{ margin: "30px" }}>
        <img src="logo.webp" className="navbar-logo-img" alt=""></img>
      </Row>
      <Row className="social-media">
        <small className="website-rights">
          Physics for the Planet Inc. is a registered 501(c)(3) organization
        </small>
      </Row>
      <Row className="social-media">
        <small className="website-rights">
          Copyright © 2022 Physics for the Planet Inc.
        </small>
      </Row>
    </div>
  );
}

export default Footer;
