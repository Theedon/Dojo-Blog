import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    isLoading,
    data: blog,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

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
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
