import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Button";
import axios from "axios";

function App() {
  axios.get("http://localhost:8000/books").then((response) => {
    console.log(response);
    console.log("処理をとおりました");
  });
  return <div className="App"></div>;
}

export default App;
