import axios from "axios";

export const searchBooks = term => axios.post("/api/books/search", {title: term})
export const saveBook = book => axios.post("/api/books/save", book);