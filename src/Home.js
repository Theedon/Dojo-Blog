const Home = () => {
  const logToConsole = (variable, e) => {
    console.log(e);
    if (variable === "") {
      console.log("nothing");
      alert("nothing");
    } else {
      console.log(`i am sending ${variable} to the console`);
      alert(`${variable}`);
    }
  };
  const showEvent = (e) => {
    console.log(e);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* for the function above, i had to create an anonymous function before i invoked my function and its argument inside of it */}
      <button
        onClick={() => {
          logToConsole("");
        }}
      >
        BUTTON ONE
      </button>
      <button
        onClick={(e) => {
          logToConsole("tola", e);
        }}
      >
        BUTTON TWO
      </button>
      <button onClick={showEvent}>BUTTON 3</button>
    </div>
  );
};

export default Home;
