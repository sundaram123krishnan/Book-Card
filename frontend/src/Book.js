import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Book(props) {
  const id = props.id;
  const history = useNavigate();
  async function deleteHandler() {
    await axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  }

  return (
    <div className="flex flex-col">
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <h1>{props.author}</h1>
      <h1>{props.description}</h1>
      <h1>{props.price}</h1>

      <div>
        <Link className="border-2 px-3 " to={`/books/${id}`}>
          Update
        </Link>
        <button className="border-2 px-3" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
