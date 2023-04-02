import React from "react";
import ReactDOM from "react-dom";

export default function Hello() {
  return <h1>hello world</h1>;
}

const root = document.getElementById("root");

ReactDOM.render(<Hello />, root);
