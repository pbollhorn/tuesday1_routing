import { useState } from "react";

export default function FindBook({ bookFacade, blankBook }) {
  const [id, setId] = useState("");
  const [currentBook, setCurrentBook] = useState(blankBook);

  function handleChange(event) {
    setId(event.target.value);
  }

  function findBook(event) {
    event.preventDefault();

    const book = bookFacade.findBook(id);
    if (book !== undefined) {
      setCurrentBook(bookFacade.findBook(id));
    } else {
      setCurrentBook(blankBook);
    }
  }

  return (
    <>
      {id}
      <h2>Find Book</h2>
      <form onSubmit={findBook}>
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="text"
          placeholder="Enter id"
          value={id}
          onChange={handleChange}
        ></input>
        <button type="submit">Find Book</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentBook.id}</td>
            <td>{currentBook.title}</td>
            <td>{currentBook.info}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
