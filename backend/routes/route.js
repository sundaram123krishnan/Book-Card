const express = require("express");
const router = express.Router();
const bookData = require("../model/books");

router.get("/", async (req, res) => {
  let books;
  try {
    books = await bookData.find({});
  } catch (error) {
    res.status(404).send("Oops! An error occurred", error);
  }
  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
});

router.post("/", async (req, res) => {
  try {
    const books = await bookData.create(req.body);
    res.status(200).json(books);
  } catch (error) {
    const status = error.status || 500;
    res.status(status).send("Oops! An error occurred", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookData.findById(id);
    if (!books) {
      return res.status(404).json({ message: "Cannot find the user" });
    }
    return res.status(200).json(books);
  } catch (error) {
    res.status(404).send("Oops! An error occurred", error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookData.findByIdAndUpdate(id, req.body);
    if (!books) {
      return res.status(404).json({ message: "Cannot update the user" });
    }
    return res.status(200).json(books);
  } catch (error) {
    res.status(404).send("Oops! An error occurred", error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookData.findByIdAndRemove(id);
    if (!books) {
      return res.status(404).json({ message: "Cannot delete the user" });
    }
    return res.status(200).json(books);
  } catch (error) {
    res.status(404).send("Oops! An error occurred", error);
  }
});

module.exports = router;
