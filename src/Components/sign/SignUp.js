import { NavLinks } from "../../Styles/SignStyle";

function SignUp({ handleChange }) {
  return (
    <>
      <h5>Create an account with Chef Palace today</h5>

      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Your Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button className="form-btn" type="submit" value="submit">
          Sign Up
        </button>
      </form>
      <p>
        Have an account already?{" "}
        <NavLinks onClick={() => handleChange("/signin")}>Login!</NavLinks>
      </p>
    </>
  );
}

export default SignUp;
