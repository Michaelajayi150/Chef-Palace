import { NavLinks } from "../../Styles/SignStyle";

function Reset({ handleChange }) {
  return (
    <>
      <h6>
        To reset password <br />
        Enter Username or Email you used to open account
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
