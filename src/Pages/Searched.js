import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import FilterTab from "../Components/FilterTab";
import Pagination from "../Components/Pagination";
import {
  FilterBtn,
  FilterContainer,
  SearchedGrid,
} from "../Styles/SearchedStyle";
import { Card, Gradient } from "../Styles/Styling";

function AllCategory() {
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
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
    console.log("Changed", option);
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
    const parameters = `${
      option.Health !== "" ? `&health=${option.Health}` : ""
    }${option.Dish !== "" ? `&dishType=${option.Dish}` : ""}${
      option.Cuisine !== "" ? `&cuisineType=${option.Cuisine}` : ""
    }${option.Diet !== "" ? `&diet=${option.Diet}` : ""}
    ${option.Meal !== "" ? `&mealType=${option.Meal}` : ""}`;

    const data = await fetch(
      `https://api.edamam.com/search?q=${name}&app_id=${appId}&app_key=${process.env.REACT_APP_API_KEY}${parameters}&from=0&to=100`
    );

    const recipes = await data.json();
    setCategory(recipes.hits);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = category.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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

        <SearchedGrid>
          {currentCards.map((item, index) => {
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
        </SearchedGrid>
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={category.length}
          paginate={paginate}
        />
      </Container>
    </>
  );
}

export default AllCategory;
