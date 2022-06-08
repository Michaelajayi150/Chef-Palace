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
        <Route exact path="/Chef-Palace" element={<Home />} />
        <Route path="/Chef-Palace/cuisine/:type" element={<Cuisine />} />
        <Route path="/Chef-Palace/searched/:search" element={<Searched />} />
        <Route path="/Chef-Palace/recipe/:name" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
