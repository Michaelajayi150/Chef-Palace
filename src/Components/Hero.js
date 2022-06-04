import { useEffect, useRef, useState } from "react";
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
} from "../Styles/HeroStyle";

function Hero() {
  const [background, setBackground] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = background.length;
  const timeout = useRef(null);

  const getBackground = async () => {
    const check = localStorage.getItem("Background");

    if (check) {
      setBackground(JSON.parse(check));
    } else {
      let appID = "23b20659";

      const api = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`
      );
      const data = await api.json();
      const randomPick = data.hits.sort(() => Math.random() - 0.5);
      const selected = randomPick.slice(0, 4);

      localStorage.setItem("Background", JSON.stringify(selected));

      setBackground(selected);
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
                  <HeroImage
                    src={slide.recipe.image}
                    alt={slide.recipe.label}
                  />
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
