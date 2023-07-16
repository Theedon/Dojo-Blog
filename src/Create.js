import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog has been added");
        setIsLoading(false);
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>

      {isLoading && <div>Adding...</div>}

      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author: </label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && <button>Add Blog</button>}

        {isLoading && <button disabled>Adding new Blog</button>}
      </form>
      <p>Title is- {title + "\n\n"}</p>
      <p>Body is- {body + "\n\n"}</p>
      <p>Author is- {author.toUpperCase() + "\n"}</p>
    </div>
  );
};

export default Create;
