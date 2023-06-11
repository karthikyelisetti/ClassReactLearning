import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

export default function Login() {
  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
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

          <div className="checkbox mb-4 mt-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            LOGIN
          </button>
          <p className="mt-3">
            Not a member? <Link to="/">Signup here</Link>
          </p>
        </form>
      </main>
    </div>
  );
}
