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
      <p>Forgot Password?</p>
      <p>New? Create new account!</p>
    </>
  );
}

export default SignIn;
