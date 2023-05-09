import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/style.css";
import Navbar from "./Navbar";
import Mobile from "./Mobile";
import Main from "./Main";

const Container = () => {
  return (
    <main className="container">
      <Navbar />
      <Mobile />
      <Main />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
