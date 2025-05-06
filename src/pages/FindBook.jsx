import { useState } from "react";

export default function FindBook() {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  function findBook() {}

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
    </>
  );
}
