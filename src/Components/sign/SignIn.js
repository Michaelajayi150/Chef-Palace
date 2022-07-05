import { NavLinks } from "../../Styles/SignStyle";

function SignIn({ handleChange }) {
  return (
    <>
      <h5>Sign in to continue using Chef Palace</h5>

      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button className="form-btn" type="submit" value="submit">
          Login
        </button>
      </form>
      <NavLinks onClick={() => handleChange("/reset")}>
        Forgot Password?
      </NavLinks>
      <p>
        New?{" "}
        <NavLinks onClick={() => handleChange("/signup")}>
          Create new account!
        </NavLinks>
      </p>
    </>
  );
}

export default SignIn;
