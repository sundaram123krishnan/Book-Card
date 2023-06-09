import React from "react";
import Book from "./Book";
import axios from "axios";

const URL = "http://localhost:5000/books";

async function fetchHandler() {
  return await axios.get(URL).then((res) => res.data);
}

export default function Allbooks() {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetchHandler().then((data) => setBooks(data));
  }, []);
  const data = books.books?.map((value) => {
    return (
      <Book
        name={value.name}
        author={value.author}
        description={value.description}
        price={value.price}
        id={value._id}
        image={value.image}
      />
    );
  });
  return <div className="grid grid-cols-7 p-3 gap-4">{data}</div>;
}


