import React from "react";
import { Button } from "./Button";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Contact us!</p>
        <Row className="social-media">
          <p className="footer__paragraph__text" style={{ margin: 0 }}>
            physics4planet@gmail.com
          </p>
        </Row>
      </section>
      <Row className="social-media" style={{ margin: "30px" }}>
        <img src="PhysTerra-10.png" className="navbar-logo-img" alt=""></img>
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
