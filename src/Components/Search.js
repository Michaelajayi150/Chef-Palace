import { useEffect, useRef, useState } from "react";
import "../Styles/search.css";
import { Link, useNavigate } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import { Nav } from "react-bootstrap";

function Search({ classType }) {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();
  const inputTab = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      inputTab.current.focus();
    } else {
      navigate("/searched/" + input);
      listOff();
    }
  };

  const listOff = () => {
    setTimeout(() => {
      setInput("");
    }, 1000);
  };

  const getList = async (input) => {
    let appID = "23b20659";

    const api = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${appID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();

    setSearchList(data.hits);
  };

  useEffect(() => {
    getList(input);
  }, [input]);

  return (
    <form className={classType} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        ref={inputTab}
        className={searchList.length >= 1 ? "border" : null}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a Recipe"
      />
      {classType === "header-search" ? (
        <button type="submit" className="form-search-submit">
          <GiIcons.GiKnifeFork size="1.1rem" />
        </button>
      ) : (
        <button type="submit" className="form-search-submit">
          <BsIcons.BsSearch size="1.1rem" />
        </button>
      )}
      {searchList.length >= 1 && classType === "hero-search" ? (
        <Nav className="search-list">
          {searchList.map((listItem, index) => {
            return (
              <Link
                to={
                  "/recipe/" +
                  listItem.recipe.uri.substr(listItem.recipe.uri.length - 32)
                }
                key={index}
                onClick={listOff}
              >
                {listItem.recipe.label}
              </Link>
            );
          })}
        </Nav>
      ) : null}
    </form>
  );
}

export default Search;
