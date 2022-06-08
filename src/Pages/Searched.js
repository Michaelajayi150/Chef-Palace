import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Card, Gradient, Grid } from "../Styles/Styling";

function Searched() {
  const [search, setSearch] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    let appId = "23b20659";

    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const recipes = await data.json();
    setSearch(recipes.hits);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Container>
      <h2> {params.search} Recipes </h2>
      <Grid>
        {search.map((item, index) => {
          return (
            <Card key={index}>
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
          );
        })}
      </Grid>
    </Container>
  );
}

export default Searched;
