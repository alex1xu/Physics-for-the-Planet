import BlogItem from "./BlogItem.js";
import Row from "react-bootstrap/Row";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogs-list-main-div">
      {blogs.map((blog) => (
        <Row key={blog.id}>
          <BlogItem
            id={blog.id}
            src={blog.src}
            title={blog.title}
            author={blog.author}
          />
        </Row>
      ))}
    </div>
  );
};

export default BlogList;
