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
    title: "New Blog",
    body: "This is the content of the new blog added",
    author: "toyin",
    id: 1,
  };

  const addBlog = () => {
    if (blogs.length >= 1) {
      newBlog.id = blogs[blogs.length - 1].id + 1;
      setBlogs([...blogs, newBlog]);
    } else {
      console.log("yes");
      newBlog.id = 1;
      setBlogs([newBlog]);
    }
  };
  const deleteBlog = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs);
  };

  return (
    <div>
      <BlogList
        blogs={blogs}
        title="All Blogs"
        addBlog={addBlog}
        deleteBlog={deleteBlog}
        newBlog={newBlog}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author == "mario")}
        title="Mario's Blogs"
        newBlog={newBlog}
        addBlog={addBlog}
        deleteBlog={deleteBlog}
      />
    </div>
  );
};

export default Home;