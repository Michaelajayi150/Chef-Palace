import { useEffect, useRef, useState } from "react";
import HeroNavbar from "./Navbar";
import Bg from "../asset/Home.jpg";
import Bg2 from "../asset/Home-2.jpg";
import Bg3 from "../asset/Home-3.jpg";
import Bg4 from "../asset/Home-4.jpg";
import Bg5 from "../asset/Home-5.jpg";
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
} from "../Styles/HeroStyle";

function Hero() {
  const [background, setBackground] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = background.length;
  const timeout = useRef(null);

  const getBackground = () => {
    const check = localStorage.getItem("Background");

    if (check) {
      setBackground(JSON.parse(check));
    } else {
      const BgArray = [
        { image: Bg, label: "Home Page" },
        { image: Bg2, label: "Home Page 2" },
        { image: Bg3, label: "Home Page 3" },
        { image: Bg4, label: "Home Page 4" },
        { image: Bg5, label: "Home Page 5" },
      ];
      localStorage.setItem("Background", JSON.stringify(BgArray));
      setBackground(BgArray);
    }
  };

  useEffect(() => {
    getBackground();

    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(background) || background.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroNavbar />
      <HeroWrapper>
        <Search classType="hero-search" />
        {background.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.label} />
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
