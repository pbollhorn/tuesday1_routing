import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Books
      </Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>
        About
      </Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
