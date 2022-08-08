import React, { useLayoutEffect } from "react";
import BlogList from "../BlogList";

const AllBlogList = [
  {
    id: "demo",
    src: "founder.jpeg",
    title: "Demo Blog",
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
      <h2 className="blogs__explain__small__text">heheheehhehe ha</h2>
      <BlogList blogs={AllBlogList} />
    </div>
  );
}

export default Blogs;
