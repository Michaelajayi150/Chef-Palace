import { Link } from "react-router-dom";

function Reset() {
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
        <Link to="/">Go Back</Link>
      </p>
    </>
  );
}

export default Reset;
