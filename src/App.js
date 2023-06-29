import logo from "./logo.svg";
import "./App.css";

function App() {
  const code = (x, y) => {
    return x * y;
  };
  const title = "Welcome to the new blog";
  const likes = 50;
  const obj = { name: "Yoshida", age: 33 };
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content"></div>
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      <p>
        {obj.name} is {obj.age} years old
      </p>
      <p>{Math.round(Math.random() * 100) + " is a random number"}</p>
      <p>
        This is the use of the function (code) declared earlier: {code(2, 3)}
      </p>
      <p>
        this is an array {"["} {[1, 2, 3, 4]} = bunched together as a string
        {" ]"}
      </p>
      <a href={link}>Link to web search</a>
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
