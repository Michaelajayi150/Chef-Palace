import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";
import Footer from "../Components/Footer";

function Pages() {
  return (
    <BrowserRouter basename="/Chef-Palace">
      <Hero />
      <Category />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Pages;
