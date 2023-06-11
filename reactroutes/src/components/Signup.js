import React from "react";
import { Link } from "react-router-dom";
import "../css/Signup.css";

function signup() {
  return (
    <div className="container loginform">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Registration</h1>
          <div className="form-floating mt-4">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">
            SIGN UP
          </button>
          <p className="mt-3">
            Already have account <Link to="/login">Login here</Link>
          </p>
        </form>
      </main>
    </div>
  );
}

export default signup;
