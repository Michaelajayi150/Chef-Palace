import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FilterTab from "../Components/search/FilterTab";
import { FilterBtn, FilterContainer } from "../Styles/SearchedStyle";
import errorImg from "../asset/error.png";
import SearchedCard from "../Components/search/SearchCards";

function AllCategory() {
  const [category, setCategory] = useState([]);

  const [errorState, setErrorState] = useState(false);
  // Hold Rendered Error Message
  const [errorMessage, setError] = useState();

  let params = useParams();
  let appId = "23b20659";

  const [option, setOption] = useState({
    Health: "",
    Diet: "",
    Dish: "",
    Meal: "",
    Cuisine: "",
  });

  const handleVal = (e, auth) => {
    setOption((prev) => ({ ...prev, [auth]: e.target.value }));
  };

  useEffect(() => {
    const getSearched = async (name) => {
      const data = await fetch(
        `https://api.edamam.com/search?q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100`
      );

      const recipes = await data.json();
      setCategory(recipes.hits);
    };

    getSearched(params.search);
  }, [params.search, appId]);

  const handleFilter = () => {
    filterSearch(params.search, option);
  };

  const filterSearch = async (name, option) => {
    try {
      const parameters = `${
        option.Health !== "" ? `&health=${option.Health}` : ""
      }${option.Dish !== "" ? `&dishType=${option.Dish}` : ""}${
        option.Cuisine !== "" ? `&cuisineType=${option.Cuisine}` : ""
      }${option.Diet !== "" ? `&diet=${option.Diet}` : ""}
      ${option.Meal !== "" ? `&mealType=${option.Meal}` : ""}`;

      const data = await fetch(
        `https://api.edamam.com/search?q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}${parameters}&from=0&to=100`
      );

      if (data.status >= 201) {
        setErrorState(true);
        const errorMessage = await data.text();
        throw new Error(errorMessage);
      } else {
        const recipes = await data.json();
        setCategory(recipes.hits);
        setErrorState(false);
      }
    } catch (err) {
      // Get the String Format of the Error Message
      var str = "";
      const messagePrompt = Object.values(`${err}`).map((item) => {
        str += `${item}`;
        return str;
      });
      // Split it into parts
      const message = messagePrompt[messagePrompt.length - 1].split(":");
      // Render the main error level any way you want
      setError(message[2]);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-capitalize">{params.search} Recipes</h1>

        {/* Filter Section */}
        <div>
          <h4>Filter by:</h4>
          <FilterContainer>
            <FilterTab option={option} handleVal={handleVal} />
          </FilterContainer>
          <FilterBtn onClick={handleFilter}>
            Filter By Your Specification
          </FilterBtn>
        </div>

        {category && !errorState ? null : (
          <>
            <img src={errorImg} width="300px" alt="Error" />
            <div>
              <h3>Oops!</h3>
              <h4>No Matches</h4>
              <p>
                This Recipes does not meet your selected filter: "{errorMessage}
              </p>
            </div>
          </>
        )}
        <SearchedCard set={category} gridNumber={12} />
      </Container>
    </>
  );
}

export default AllCategory;
