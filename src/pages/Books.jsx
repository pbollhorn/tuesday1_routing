export default function Books({ bookFacade }) {
  const books = bookFacade.getBooks();

  return (
    <>
      <h2>Books</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
