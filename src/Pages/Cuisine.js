import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SearchedCard from "../Components/search/SearchCards";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    let appID = "23b20659";

    const data = await fetch(
      `https://api.edamam.com/search?q=salad&q=bread&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100&cuisineType=${name}&random=true`
    );
    const recipes = await data.json();
    setCuisine(recipes.hits);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Container>
      <h2> {params.type} Recipes </h2>
      <SearchedCard set={cuisine} gridNumber={24} />
    </Container>
  );
}

export default Cuisine;
