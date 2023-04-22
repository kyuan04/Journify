import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import APIService from "./component/APIService";

function App() {
  const [title, setTitle] = useState("THIS IS TITLE");
  const [body, setBody] = useState("THIS IS BODY");

  //title and body are temp, can be collected from form using useSTate
  //use APIService component to call backend
  APIService.InsertArticle({ title, body });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> adawdo
          rdaddqdadddawdaadwddddadwdwawaddadweload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
