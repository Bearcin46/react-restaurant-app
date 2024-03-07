import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";

//3.card

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<AppLayout />);
