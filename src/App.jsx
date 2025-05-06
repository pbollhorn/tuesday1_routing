import "./App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function App({bookFacade}) {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}