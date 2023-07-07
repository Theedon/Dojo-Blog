import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="blog-preview">
          <p>page loading...</p>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

// run npx json-server --watch ./data/db.json --port 8000 to start the json server

// const runFunction = async () => {
//   useEffect(() => {
//     const response = axios.get("http://localhost:8000/blogs");
//     const data = response.json(response);
//     setBlogs(data);
//   }, [])
// }
