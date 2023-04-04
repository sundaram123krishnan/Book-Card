import React from "react";

export default function Book(props) {
  return (
    <div className="flex flex-col">
      <h1>{props.name}</h1>
      <h1>{props.author}</h1>
      <h1>{props.description}</h1>
      <h1>{props.price}</h1>
    </div>
  );
}
