import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.svg";

import "./assets/scss/style.css";

const Container = () => {
  return (
    <main className="container">
      <Hello />
    </main>
  );
};

const Hello = () => {
  return <img src={logo} alt="logo" />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
