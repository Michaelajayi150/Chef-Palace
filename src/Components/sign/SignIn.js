import { Link } from "react-router-dom";

function SignIn() {
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
      <p>
        <Link to="/reset">Forgot Password?</Link>
      </p>
      <p>
        New? <Link to="/signup">Create new account!</Link>
      </p>
    </>
  );
}

export default SignIn;
