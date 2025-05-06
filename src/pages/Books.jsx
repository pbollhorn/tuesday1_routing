import bookFacade from "../bookFacade.js";

export default function Books() {
  const books = bookFacade.getBooks();

  return (
    <>
      <h2>Books</h2>
      <ul>
        {books.map((b) => (
          <li>{b.title}</li>
        ))}
      </ul>
    </>
  );
}
