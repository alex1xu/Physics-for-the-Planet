import React, { useState, useLayoutEffect } from "react";

function JoinUs() {
  return (
    <div>
      <div className="about__title__div">
        <h1 className="projects__explain__text">Join Us</h1>
      </div>
      <div className="join_form" style={{ overflow: "hidden" }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScCr818hhZali1Cj8CqBVlQkGTYaUrlAllMJV1JVqqYmZnduQ/viewform?embedded=true"
          width="640"
          height="1900"
          scrolling="no"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default JoinUs;
