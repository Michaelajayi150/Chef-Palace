import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Card, Gradient } from "../Styles/Styling";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Popular() {
  const [Popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("Popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      let appID = "23b20659";

      const api = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&random=true`
      );
      const data = await api.json();

      localStorage.setItem("Popular", JSON.stringify(data.hits));
      setPopular(data.hits);
    }
  };

  return (
    <div>
      <Container>
        <h2> Popular Recipes </h2>

        {/* Slide Container */}
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {Popular.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <Card>
                  <Link
                    to={
                      "/recipe/" +
                      item.recipe.uri.substr(item.recipe.uri.length - 32)
                    }
                  >
                    <img src={item.recipe.image} alt={item.recipe.label} />
                    <p>{item.recipe.label}</p>
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Container>
    </div>
  );
}

export default Popular;
