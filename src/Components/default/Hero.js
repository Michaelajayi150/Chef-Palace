// import { useEffect, useRef, useState } from "react";
import HeroNavbar from "./Navbar";
import Search from "./Search";
import {
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  SliderButtons,
} from "../../Styles/HeroStyle";
import { SplideTrack } from "@splidejs/react-splide";

function Hero({ ModalStat, background }) {
  return (
    <HeroSection>
      <HeroNavbar popModal={ModalStat} />
      <HeroWrapper>
        <Search classType="hero-search" />
        <HeroSlide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            pagination: false,
            drag: false,
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {background.map((slide, index) => {
              return (
                <HeroSlider key={index}>
                  <HeroImage src={slide.image} alt={slide.label} />
                </HeroSlider>
              );
            })}
          </SplideTrack>
          <SliderButtons className="splide__arrows">
            <PrevArrow className="splide__arrow splide__arrow--prev" />
            <NextArrow className="splide__arrow splide__arrow--next" />
          </SliderButtons>
        </HeroSlide>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
