import { useState } from "react";

export default function AddBook({ bookFacade }) {
  const [currentBook, setCurrentBook] = useState({ title: "", info: "" });

  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    setCurrentBook({ ...currentBook, [id]: value });
  }

  return (
    <>
      {JSON.stringify(currentBook)}
      <h2>Add Book</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={currentBook.title}
          onChange={handleChange}
        ></input>
        <label htmlFor="info">Title</label>
        <input
          id="info"
          type="text"
          placeholder="Enter info"
          value={currentBook.info}
          onChange={handleChange}
        ></input>
      </form>
    </>
  );
}
