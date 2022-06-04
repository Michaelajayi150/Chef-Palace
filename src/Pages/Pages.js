import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";

function Pages() {
  return (
    <BrowserRouter>
      <Hero />
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
