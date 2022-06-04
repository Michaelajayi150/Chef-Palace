import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card, Gradient, Grid } from "../Styles/Styling";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Container>
      <h2> {params.type} Recipes </h2>
      <Grid>
        {cuisine.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
              <Gradient />
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cuisine;
