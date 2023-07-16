import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    isLoading,
    data: blog,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    console.log(blog.id);
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        console.log("deleted");
        history.push("/");
      }
    );
  };

  return (
    <div className="blog-details">
      <h2>Blog Pages: {id}</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading page</div>}
      {blog && (
        <article>
          <h2>Title: {blog.title}</h2>
          <p>Authored by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
