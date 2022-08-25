import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function PanelItem(props) {
  let difficulty_symbol = (
    <i className="panel-caption-outline easy-tag">{props.difficulty}</i>
  );
  if (props.difficulty === "Medium")
    difficulty_symbol = (
      <i className="panel-caption-outline medium-tag">{props.difficulty}</i>
    );
  else if (props.difficulty === "Hard")
    difficulty_symbol = (
      <i className="panel-caption-outline hard-tag">{props.difficulty}</i>
    );

  return (
    <>
      <div className="panel-container">
        <Link
          to={"/projects/" + props.id}
          className="row no-gutters no-hover  center "
        >
          <div className="col-md-4 card-img-max">
            <img src={props.src} className="panel-card-img unround" alt="" />
          </div>
          <div className="col-md-8 panel-column">
            <div className="panel-text-div">
              <h3 className="panel-title-outline">{props.title}</h3>
              <p className="panel-text-outline">{props.blurb}</p>
              <div className="panel-tags-outline">
                <i class="fa-solid fa-signal"></i>
                <div className="projects-tags-captions smaller-text">
                  {props.difficulty}
                </div>
                <i class="fa-solid fa-clock"></i>
                <div className="projects-tags-captions smaller-text">
                  {props.duration} hours
                </div>
                <i class="fa-solid fa-coins"></i>
                <div className="project-cost-text projects-tags-captions smaller-text">
                  ${props.cost}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PanelItem;
