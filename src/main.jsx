import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Book from "./pages/Book";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signup" Component={Signup} />
        <Route path="/signin" Component={Signin} />
        <Route path="/book" Component={Book} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
