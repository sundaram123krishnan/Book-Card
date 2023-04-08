import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BookDetail() {
  const id = useParams().id;
  const history = useNavigate();

  const [values, setValues] = React.useState({});

  React.useEffect(() => {
    async function fetchHandler() {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => setValues(res.data));
    }
    fetchHandler();
  }, [id]);
  console.log(values);
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
      .put(`http://localhost:5000/books/${id}`, {
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
    console.log(values);
    sendRequest().then(() => history("/books"));
  }
  console.log(values);
  return (
    <div>
      i am id
      <form
        className="flex flex-col gap-5 text-xl items-start justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          placeholder="Enter the name of the book"
          className="px-3 border-black border-2 w-max"
          onChange={handleChange}
        />
        <input
          type="text"
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          placeholder="Enter the name of the author"
          className="px-3 border-black border-2 w-max"
        />
        <input
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Enter description about the book"
          className="px-3 border-black border-2 w-max"
        />
        <input
          type="text"
          id="image"
          name="image"
          value={values.image}
          onChange={handleChange}
          placeholder="Enter the url of the book"
          className="px-3 border-black border-2 w-max"
        />

        <input
          type="text"
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
          placeholder="Enter the price of the book"
          className="px-3 border-black border-2 w-max"
        />
        <button type="submit">update book</button>
      </form>
    </div>
  );
}
