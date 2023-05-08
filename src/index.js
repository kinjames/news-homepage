import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/scss/style.css";
import Navbar from "./Navbar";
import Mobile from "./Mobile";

const Container = () => {
  return (
    <main className="container">
      <Navbar />
      <Mobile />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
