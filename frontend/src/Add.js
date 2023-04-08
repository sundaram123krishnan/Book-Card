import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const history = useNavigate();
  const [values, setValues] = React.useState({
    name: "",
    author: "",
    description: "",
    price: 0,
    image: "",
  });

  function handleChange(e) {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function sendRequest() {
    await axios
      .post("http://localhost:5000/books", {
        name: String(values.name),
        author: String(values.author),
        description: String(values.description),
        image: String(values.image),
        price: Number(values.price),
      })
      .then((res) => res.data);
  }

  function handleSubmit(e) {
    e.preventDefault();

    sendRequest().then(() => history("/books"));
  }

  return (
    <>
    <h1 className="text-center mt-10 text-5xl font-bold">ADD YOUR BOOK</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center justify-center mt-20"
      >
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          placeholder="Enter the name of the book"
          className="px-5 py-2 border-black border-2 w-1/2 text-3xl rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          placeholder="Enter the name of the author"
          className="px-5 py-2 border-black border-2 w-1/2 text-3xl rounded-md"
        />
        <input
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Enter description about the book"
          className="px-5 py-2 border-black border-2 w-1/2 text-3xl rounded-md"
        />
        <input
          type="text"
          id="image"
          name="image"
          value={values.image}
          onChange={handleChange}
          placeholder="Enter the url of the image"
          className="px-5 py-2 border-black border-2 w-1/2 text-3xl rounded-md"
        />
        <input
          type="text"
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
          placeholder="Enter the price of the book"
          className="px-5 py-2 border-black border-2 w-1/2 text-3xl rounded-md"
        />

        <button type="submit" className="uppercase border-2  px-10 py-5">add book</button>
      </form>
    </>
  );
}
