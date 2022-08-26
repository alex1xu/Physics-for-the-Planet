import React, { useLayoutEffect } from "react";
import BlogList from "../BlogList";

const AllBlogList = [
  {
    id: "flower_turbine",
    src: "Flower_Turbine_Header.jpg",
    title: "The Underrated Power of Flower Turbines",
    author: "By Charles Huang",
  },
  {
    id: "demo2",
    src: "wide6.jpeg",
    title: "Demo Blog 2",
    author: "By Author",
  },
];

function Blogs() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="blogs-main-div">
      <h1 className="blogs__explain__text">Blogs</h1>
      <h2 className="blogs__explain__small__text">
        Activism, discoveries, and analysis written by our team. Made to
        inspire.
      </h2>
      <BlogList blogs={AllBlogList} />
    </div>
  );
}

export default Blogs;
