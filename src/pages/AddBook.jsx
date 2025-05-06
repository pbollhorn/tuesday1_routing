import { useState } from "react";

const blankBook = { title: "", info: "" };

export default function AddBook({ bookFacade }) {
  const [currentBook, setCurrentBook] = useState(blankBook);

  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    setCurrentBook({ ...currentBook, [id]: value });
  }

  function addBook() {
    alert("hallo");
  }

  function clearFields() {
    setCurrentBook(blankBook);
  }

  return (
    <>
      {JSON.stringify(currentBook)}
      <h2>Add Book</h2>
      <form onSubmit={addBook}>
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
        <button type="submit">Add Book</button>
      </form>
      <button onClick={clearFields}>Clear Fields</button>
    </>
  );
}
