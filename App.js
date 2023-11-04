import React from "react";
import ReactDOM from "react-dom/client";
import { main } from "./style/main.css";
import { Header } from "./Header/Header";
import Body from "./Body/Body";
import { Footer } from "./Footer/Footer";
const AppLayout = () => {
  return (
    <div className="main-app">
      <Header />
      <div className="res-container">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
