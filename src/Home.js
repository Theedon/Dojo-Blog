import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(10);
  // console.log("value before change by hook", name);

  const handleClick = (var1) => {
    setName(var1);
    setAge(20);
    // console.log("value after change by hook", name);
  };

  const changeAlways = (name) => {
    if (name == "Mario") {
      setName("Luigi");
      setAge(20);
    } else {
      setName("Mario");
      setAge(10);
    }
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button
        onClick={() => {
          handleClick("Luigi");
        }}
      >
        BUTTON
      </button>
      <button onClick={() => changeAlways(name)}>BUTTON2</button>
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="subHome1">
        <p>
          {name} is {age} years old
        </p>
        <button
          onClick={() => {
            changeAlways(name);
          }}
        >
          RENDER BUTTON
        </button>
      </div>
    </div>
  );
};

export default Home;
