import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  let textClass = "cards__item__text__about";
  let linkClass = "cards__item__link no-hover2";
  if (props.home) {
    textClass = "cards__item__text__home";
    linkClass = "cards__item__link no-hover";
  }
  return (
    <>
      <li className="cards__item">
        <Link className={linkClass} to={props.path}>
          <div
            className={
              props.home
                ? "home__cards__item__pic-wrap"
                : "cards__item__pic-wrap"
            }
          >
            <img
              className="cards__item__img skeleton"
              alt="central"
              src={props.src}
              loading="lazy"
            />
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__name">{props.name}</h5>
            <h5 className={textClass}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
