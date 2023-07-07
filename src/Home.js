import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const urlEndpoint = "http://localhost:8000/blogs";
  const { data: blogs, isLoading, error } = useFetch(urlEndpoint);

  return (
    <div>
      {error && (
        <div className="blog-preview">
          <p>{error}</p>
        </div>
      )}
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
