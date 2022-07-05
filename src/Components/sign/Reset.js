import { NavLinks } from "../../Styles/SignStyle";

function Reset({ handleChange }) {
  return (
    <>
      <h6>
        Enter Username or Email you used to open account to be able to reset
        password
      </h6>
      <form>
        <input type="email" placeholder="Your Email" required />
        <button className="form-btn" type="submit" value="submit">
          Submit
        </button>
      </form>
      <p>
        <NavLinks onClick={() => handleChange("/signin")}>Go Back</NavLinks>
      </p>
    </>
  );
}

export default Reset;
