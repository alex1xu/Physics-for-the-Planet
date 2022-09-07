import React, { useLayoutEffect } from "react";
import BlogList from "../BlogList";

const AllBlogList = [
  {
    id: "flower_turbine",
    src: "Flower_Turbine_Header.jpg",
    title: "The Underrated Power of Flower Turbines",
    author: "By Charles Huang",
  },
];

function Blogs() {
  return (
    <div className="blogs-main-div">
      <h1 className="blogs__explain__text">Blog</h1>
      <h2 className="blogs__explain__small__text">
        The latest discoveries, stories of activism, and more.
      </h2>
      <BlogList blogs={AllBlogList} />
    </div>
  );
}

export default Blogs;
