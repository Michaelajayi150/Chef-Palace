function Reset() {
  return (
    <>
      <h5>
        Enter Username or Emai you used to open account to be able to reset
        password
      </h5>
      <input type="email" placeholder="Your Email" required />
      <button className="form-btn" type="submit" value="submit">
        Submit
      </button>
      <p>Go Back</p>
    </>
  );
}

export default Reset;
