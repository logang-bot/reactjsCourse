// import others components
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "welcome to the new blog";
  // const likes = 50;
  // const person = { name: "yoshi", age: 30 };
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        {/* using a component */}
        <Home></Home>

        {/*
        Using dynamic variables
        <h1>{title}</h1>
        <p> Liked {likes} times</p>

        {/* Objects cant be an output */}
        {/* <p>{person}</p> */}

        {/* <p>{10}</p>
        <p>{"hello"}</p>
        <p>{[1, 2, 3, 4]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google site</a> */}
      </div>
    </div>
  );
}

export default App;
