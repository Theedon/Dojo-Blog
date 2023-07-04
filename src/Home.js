import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
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

  // beginning of jsx for code in browser
  return (
    <div>
      <BlogList
        blogs={blogs}
        title="All Blogs"
        newBlog={newBlog}
        addBlog={addBlog}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "mario")}
        title="Mario's Blogs"
        newBlog={newBlog}
        addBlog={addBlog}
      />
    </div>
  );
};

export default Home;
