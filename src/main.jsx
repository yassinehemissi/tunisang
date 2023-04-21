import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Book from "./pages/Book";
import Besoin from "./pages/Besoin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signup" Component={Signup} />
        <Route path="/signin" Component={Signin} />
        <Route path="/book" Component={Book} />
        <Route path="/besoin" Component={Besoin} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
