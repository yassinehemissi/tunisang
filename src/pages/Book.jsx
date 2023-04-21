import { useState } from "react";
import "../styles/pages/Book.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Map from "../components/Book/Map";
import Calendar from "../components/Book/Calendar";
import Search from "../components/Book/Search";

const Book = () => {
  return (
    <>
      <Header route="don" theme="white" />
      <main className="book-container">
        <Search />
        <Map />
      </main>
    </>
  );
};

export default Book;
