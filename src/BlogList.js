import { React } from "react";

const BlogList = ({ blogs, title, addBlog, newBlog }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Title: {blog.title}</h2>
          <p>Author: {blog.author}</p>
          <br />
        </div>
      ))}
      <div className="container">
        <button onClick={() => addBlog(newBlog)}>BUTTON</button>
      </div>
    </div>
  );
};

export default BlogList;
