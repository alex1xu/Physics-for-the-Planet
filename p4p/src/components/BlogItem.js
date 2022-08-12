import React from "react";
import { Link } from "react-router-dom";

function BlogItem(props) {
  return (
    <>
      <div className="panel-container-blog">
        <Link to={"/blogs/" + props.id} className="row no-gutters no-hover">
          <div className="col-md-4 card-img-max">
            <img src={props.src} className="card-img unround" alt="" />
          </div>
          <div className="col-md-8 panel-column">
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
