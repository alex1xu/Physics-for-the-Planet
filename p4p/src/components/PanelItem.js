import React from "react";
import { Link } from "react-router-dom";

function PanelItem(props) {
  let difficulty_symbol = (
    <i className="panel-caption-outline fa-regular fa-circle easy-tag">
      {props.difficulty}
    </i>
  );
  if (props.difficulty === "Medium")
    difficulty_symbol = (
      <i className="panel-caption-outline fa-regular fa-circle-half-stroke medium-tag">
        {props.difficulty}
      </i>
    );
  else if (props.difficulty === "Hard")
    difficulty_symbol = (
      <i className="panel-caption-outline fa-regular fa-circle hard-tag">
        {props.difficulty}
      </i>
    );

  return (
    <>
      <div className="panel-container">
        <Link
          to={"/projects/" + props.id}
          className="row no-gutters no-hover  center"
        >
          <div className="col-md-4">
            <img src={props.src} className="card-img" alt="" />
          </div>
          <div className="col-md-8">
            <div className="panel-text-div">
              <h3 className="panel-title-outline">{props.title}</h3>
              <p className="panel-text-outline">{props.blurb}</p>
              <div className="panel-tags-outline">
                <div className="panel-caption-outline ">
                  {difficulty_symbol}
                </div>
                <i className="fa-regular fa-clock black-outline panel-caption-outline ">
                  {props.duration} hours
                </i>
                <div className="panel-caption-outline ">${props.cost}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PanelItem;
