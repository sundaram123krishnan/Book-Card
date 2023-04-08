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
    <div className="flex flex-col justify-center border-white border-2 p-3 rounded-lg gap-2 ">
      <img src={props.image} alt="" className="w-72"/>
      <h1 className="font-bold">BOOK: {props.name}</h1>
      <h1 className="font-bold">Author: {props.author}</h1>
      <h1 className="font-bold">Desc: {props.description}</h1>
      <h1 className="font-bold">Price: Rs.{props.price}</h1>

      <div className="flex gap-2">
        <Link
          className="px-3 bg-black text-white text-lg py-2 uppercase"
          to={`/books/${id}`}
        >
          Update
        </Link>
        <button
          className="px-3 bg-black text-white text-lg py-2 uppercase"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
