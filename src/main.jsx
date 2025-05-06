import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import FindBook from "./pages/FindBook";
import bookFacade from "./bookFacade.js";

const blankBook = { id: "", title: "", info: "" };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App bookFacade={bookFacade} />,
    children: [
      { path: "/", element: <Books bookFacade={bookFacade} /> },
      {
        path: "/addbook",
        element: <AddBook bookFacade={bookFacade} blankBook={blankBook} />,
      },
      {
        path: "/findbook",
        element: <FindBook bookFacade={bookFacade} blankBook={blankBook} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
