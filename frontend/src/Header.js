import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Add from "./Add";
import About from "./About";
import Allbooks from "./Allbooks";
import BookDetail from "./BookDetail";

export default function Header() {
  return (
    <BrowserRouter>
      <div className="flex gap-2 bg-blue-800 text-white p-5">
        <button className="text-lg font-bold">
          <NavLink to="/add">Add</NavLink>
        </button>
        <button className="text-lg font-bold">
          <NavLink to="/books">books</NavLink>
        </button>
        <button className="text-lg font-bold">
          <NavLink to="/about">About</NavLink>
        </button>
      </div>
      <Routes>
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/books" element={<Allbooks />} />
        <Route exact path="/books/:id" element={<BookDetail />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
