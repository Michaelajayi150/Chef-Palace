import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { List } from "../Styles/Styling";

function Category() {
  return (
    <List>
      <NavLink to="/cuisine/Italian">
        <FaIcons.FaPizzaSlice />
        <p>Italian</p>
      </NavLink>
      <NavLink to="/cuisine/Spanish">
        <GiIcons.GiChopsticks />
        <p>Spanish</p>
      </NavLink>
      <NavLink to="/cuisine/American">
        <FaIcons.FaHamburger />
        <p>American</p>
      </NavLink>
      <NavLink to="/cuisine/African">
        <GiIcons.GiBowlOfRice />
        <p>African</p>
      </NavLink>
    </List>
  );
}

export default Category;
