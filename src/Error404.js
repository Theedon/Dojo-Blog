import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>page is not found</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default Error404;
