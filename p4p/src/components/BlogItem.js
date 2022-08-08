import React from "react";
import { Link } from "react-router-dom";

function BlogItem(props) {
  return (
    <>
      <div className="panel-container">
        <Link to={"/blogs/" + props.id} className="row no-gutters">
          <div className="col-md-4">
            <img src={props.src} className="card-img" alt="" />
          </div>
          <div className="col-md-8">
            <div className="panel-text-div">
              <h3 className="panel-title-outline">{props.title}</h3>
              <p className="panel-text-outline">{props.author}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default BlogItem;
