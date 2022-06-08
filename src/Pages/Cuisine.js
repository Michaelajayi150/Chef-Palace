import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Card, Gradient, Grid } from "../Styles/Styling";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    let appID = "23b20659";

    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=salad&q=bread&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&cuisineType=${name}&random=true`
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
      <Grid>
        {cuisine.map((item, index) => {
          return (
            <Card key={index}>
              <Link
                to={
                  "/Chef-Palace/recipe/" +
                  item.recipe.uri.substr(item.recipe.uri.length - 32)
                }
              >
                <img src={item.recipe.image} alt={item.recipe.label} />
                <p>{item.recipe.label}</p>
                <Gradient />
              </Link>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cuisine;
