// import logo from "./logo.svg";
import "./App.css";

function App() {
  const code = (x, y) => {
    return x * y;
  };
  return (
    <div className="App">
      <div className="content"></div>
      <h1>App Component</h1>
      <div>{code(2, 3)}</div>
    </div>
  );
}

export default App;
