import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

export function ProjectDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  //UN COMMENT THESE AND USE THEM
  //<i className="panel-caption-outline fa-regular fa-circle easy-tag">Easy</i>
  //<i className="panel-caption-outline fa-regular fa-circle-half-stroke medium-tag">Medium</i>
  //<i className="panel-caption-outline fa-regular fa-circle hard-tag">Hard</i>

  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">Project Title</h1>
          <h2 className="paragraph__text">By Author</h2>
          <div className="projects-tags">
            <i className="fa-regular fa-circle easy-tag projects-tags-captions">
              Easy
            </i>
            <i className="fa-regular fa-clock black-outline projects-tags-captions">
              10 hours
            </i>
            <div className="project-cost-text projects-tags-captions">$50</div>
          </div>
          <h2 className="paragraph__text">
            opening paragraph be bop be bop opening paragraph be bop be bop
            opening paragraph be bop be bop opening paragraph be bop be bop
            opening paragraph be bop be bop opening paragraph be bop be bop
            opening paragraph be bop be bop opening paragraph be bop be bop
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/founder2.jpeg"
          />
          <h2 className="paragraph__text" style={{ margin: "1rem" }}>
            Picture: Caption
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">Item 1</li>
            <li className="supplies-text">Item 2</li>
            <li className="supplies-text">Item 3</li>
            <li className="supplies-text">Item 4</li>
          </ol>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <img
            className="about__full__image"
            alt="cover"
            src="/founder2.jpeg"
          />
          <h2 className="paragraph__text" style={{ margin: "1rem" }}>
            Picture: Caption
          </h2>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step X</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
        <img className="about__full__image" alt="cover" src="/founder2.jpeg" />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step X+1</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
        </h2>
        <img className="about__full__image" alt="cover" src="/founder2.jpeg" />
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
        </h2>
      </div>
    </div>
  );
}

export function ProjectTurbine() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  //UN COMMENT THESE AND USE THEM
  //<i className="fa-regular fa-circle easy-tag projects-tags-captions">Easy</i>
  //<i className="fa-regular fa-circle-half-stroke medium-tag projects-tags-captions">Medium</i>
  //<i className="fa-regular fa-circle hard-tag projects-tags-captions">Hard</i>

  return (
    <div>
      <div className="about__explain__div">
        <div>
          <h1 className="about__explain__text">Turbine</h1>
          <h2 className="paragraph__text">By Rick</h2>
          <div className="projects-tags">
            <i className="fa-regular fa-circle hard-tag projects-tags-captions">
              Hard
            </i>
            <i className="fa-regular fa-clock black-outline projects-tags-captions">
              5 hours
            </i>
            <div className="project-cost-text projects-tags-captions">$40</div>
          </div>
          <h2 className="paragraph__text">
            opening paragraph text opening paragraph text opening paragraph text
            opening paragraph text opening paragraph text opening paragraph text
            opening paragraph text opening paragraph text opening paragraph text
            opening paragraph text opening paragraph text opening paragraph text
          </h2>
        </div>
        <div>
          <img
            className="about__full__image"
            alt="cover"
            src="/founder2.jpeg"
          />
          <h2 className="paragraph__text" style={{ margin: "1rem" }}>
            Picture: cover photo caption
          </h2>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h1 className="heading__text">Supplies</h1>
          <ol className="supplies-list">
            <li className="supplies-text">
              <a href="https://www.amazon.com/s?k=mechanical+drawing+pen&ref=nb_sb_noss">
                drugs
              </a>
            </li>
            <li className="supplies-text">Item 2</li>
            <li className="supplies-text">Item 3</li>
            <li className="supplies-text">Item 4</li>
          </ol>
        </div>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step X</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
        <img className="about__full__image" alt="cover" src="/founder2.jpeg" />
      </div>
      <div className="mission__div">
        {/* ajksdhflkajhsdlkjfh */}
        <h1 className="heading__text mission__text">Step X+2</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
      </div>
      <div className="mission__div">
        <h1 className="heading__text mission__text">Step X+1</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
        </h2>
        <img className="about__full__image" alt="cover" src="/founder2.jpeg" />
      </div>
      <div className="mission__div" key="conclusion">
        <h1 className="heading__text mission__text">Result</h1>
        <h2 className="paragraph__text  mission__text">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
        </h2>
      </div>
    </div>
  );
}

export function BlogDemo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="mission__div">
        <img className="about__full__image" alt="cover" src="/founder2.jpeg" />
        <h2 className="paragraph__text" style={{ margin: "1rem" }}>
          Picture: Caption
        </h2>
        <h1 className="blog__explain__text">Blog Title</h1>
        <h2
          className="blog__explain__text about__explain__small__text"
          style={{ marginBottom: "2rem" }}
        >
          By Author
        </h2>
        <h2 className="paragraph__text  mission__text paragraph-break">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
        <img
          className="about__full__image"
          alt="STICK AN IMAGE HERE IF YOU WANT OR ELSE GET RID OF IT"
          src="/founder2.jpeg"
        />
        <h2 className="paragraph__text" style={{ margin: "1rem" }}>
          Picture: Caption
        </h2>
        <h2 className="paragraph__text  mission__text paragraph-break">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
        <h2 className="paragraph__text  mission__text paragraph-break">
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
          these people We do this and that for these people We do this and that
          for these people We do this and that for these people We do this and
          that for these people We do this and that for these people We do this
          and that for these people We do this and that for these people We do
          this and that for these people We do this and that for these people We
          do this and that for these people We do this and that for these people
          We do this and that for these people We do this and that for these
          people We do this and that for these people We do this and that for
        </h2>
      </div>
    </div>
  );
}
