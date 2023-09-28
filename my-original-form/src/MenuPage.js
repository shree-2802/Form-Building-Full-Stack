import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Shiv";
const MenuPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/table" exact element={<Details />} />
        <Route path="/update/:id" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default MenuPage;
