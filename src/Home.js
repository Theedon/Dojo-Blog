import { useState } from "react";

const Home = () => {
  let newBlog = {
    title: "New Title",
    body: "This is new content added",
    author: "toyin",
    id: 1,
  };

  const addBlog = () => {
    newBlog.id = blogs[blogs.length - 1].id + 1;
    setBlogs([...blogs, newBlog]);
    // console.log(newBlog.id);
  };

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="home">
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

export default Home;
