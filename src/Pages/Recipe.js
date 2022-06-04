import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import {
  Aside,
  ItemsRules,
  Mains,
  NutContent,
  NutDetail,
  Nutrients,
  RecipeContainer,
  Series,
} from "../Styles/RecipeStyle";

function Recipe() {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [ing, setIngredients] = useState([]);
  const [nut, setNutrients] = useState([]);
  let params = useParams();

  useEffect(() => {
    getRecipe(params.name);
  }, [params]);

  const getRecipe = async (name) => {
    let appID = "23b20659";
    const data = await fetch(
      `/api/recipes/v2/${name}?type=public&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const recipe = await data.json();
    setDetails(recipe.recipe);

    //Get Recipe Ingredients
    const Ingredients = recipe.recipe.ingredientLines.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    setIngredients(Ingredients);

    //Get Recipe Nutrients
    const Nutrients = recipe.recipe.digest.map((item, index) => {
      return item;
    });
    setNutrients(Nutrients);

    // Similar Recipes of Certain Recipe
    const similarData = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe.recipe.dishType}&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}&dishtype=${recipe.recipe.dishType}&random=true`
    );

    const similarRecipes = await similarData.json();
    const randomPick = similarRecipes.hits.sort(() => Math.random() - 0.5);
    const selected = randomPick.slice(0, 4);

    setSimilar(selected);
  };

  const convertTime = (time) => {
    var Hours =
      Math.trunc(time / 60) >= 2
        ? `${Math.trunc(time / 60)} Hours`
        : Math.trunc(time / 60) === 1
        ? `${Math.trunc(time / 60)} Hour`
        : "";
    var Min =
      Math.trunc(time % 60) >= 1 ? `${Math.trunc(time % 60)} Minutes` : "";

    return `${Hours} ${Min}`;
  };

  return (
    <Container>
      <Link to={"/searched/" + details.label} className="text-decoration-none">
        <h2 className="text-uppercase">Recipe/{details.dishType}</h2>
      </Link>
      <RecipeContainer>
        <Mains>
          <h1>{details.label}</h1>
          <img src={details.image} alt={details.label} width="100%" />
          <button>
            <BsIcons.BsHeartFill size="2rem" />
            <h4>Add to Favourites</h4>
          </button>

          {/* Recipe Stats */}
          <div className="stats">
            <div className="recipe-time">
              Ready In: {convertTime(details.totalTime)}
            </div>
            <div className="recipe-type">Meal Type: {details.mealType}</div>
            <div className="recipe-serve">Serves: {details.yield}</div>
          </div>

          {/* Ingredients, Nutrients and Instruction Series */}
          <Series>
            <ItemsRules>
              <h3>{ing.length} Ingredients</h3>
              {ing}
              <h3>Instructions</h3>
            </ItemsRules>
            <Nutrients>
              <h3>Nutrition</h3>
              <NutDetail>
                <b className="text-uppercase">
                  {Math.floor(details.calories)} Calories per servings
                </b>
              </NutDetail>
              <div>
                {nut.map((nutrient, index) => {
                  return (
                    <NutContent key={index}>
                      <p>
                        {nutrient.label}
                        <span>
                          <span>
                            {Math.trunc(nutrient.total / 4)}
                            {nutrient.unit}
                          </span>
                          <span>{Math.trunc(nutrient.daily / 4)}%</span>
                        </span>
                      </p>
                      <div>
                        {nutrient.sub
                          ? nutrient.sub.map((nutrientSub, index) => {
                              return (
                                <p key={index}>
                                  {nutrientSub.label}
                                  <span className="nutrient-params">
                                    <span>
                                      {Math.trunc(nutrientSub.total / 4)}
                                      {nutrientSub.unit}
                                    </span>
                                    <span>
                                      {Math.trunc(nutrientSub.daily / 4)}%
                                    </span>
                                  </span>
                                </p>
                              );
                            })
                          : null}
                      </div>
                    </NutContent>
                  );
                })}
              </div>
            </Nutrients>
          </Series>
        </Mains>
        <Aside>
          <h4>ALSO SEE:</h4>
          {similar.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  to={
                    "/recipe/" +
                    item.recipe.uri.substr(item.recipe.uri.length - 32)
                  }
                >
                  <img
                    src={item.recipe.image}
                    alt={item.recipe.label}
                    width="100%"
                  />
                  <p>{item.recipe.label}</p>
                </Link>
              </div>
            );
          })}
        </Aside>
      </RecipeContainer>
    </Container>
  );
}

export default Recipe;
