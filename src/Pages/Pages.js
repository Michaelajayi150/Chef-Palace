import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Components/default/Hero";
import Category from "../Components/default/Category";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";
import Footer from "../Components/default/Footer";
import ScrollTop from "../Components/default/ScrollTop";
import Sign from "./Sign";
import { useState } from "react";

function Pages() {
  // const [isLogged, setIsLogged] = useState(false);
  const [modal, setmodal] = useState(false);

  const Modal = () => {
    setmodal(!modal);
  };

  return (
    <BrowserRouter basename="/Chef-Palace">
      <ScrollTop />
      {modal ? <Sign closeModal={Modal} /> : null}
      <Hero ModalStat={Modal} />
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
