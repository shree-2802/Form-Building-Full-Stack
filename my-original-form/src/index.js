import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Details } from "./Shiv";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/table" exact element={<Details />} />
      <Route path="/update/:id" exact element={<Home />} />
    </Routes>
  </BrowserRouter>
);
``;
