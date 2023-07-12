import { React } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>Title: {blog.title}</h2>
            <p>Author: {blog.author}</p>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
