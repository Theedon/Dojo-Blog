import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return <div>{blogs && <BlogList blogs={blogs} title="All Blogs" />}</div>;
};

export default Home;
