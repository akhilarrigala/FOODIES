import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="card border-0 shadow rounded-3">
        <div className="card-body p-4 p-sm-5">
          <h5 className="card-title text-center mb-4 fw-light fs-4">Sign In</h5>
          <form>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-grid">
              <button className="btn btn-outline-primary text-uppercase" type="submit">Sign In</button>
              <button className="btn btn-outline-danger text-uppercase mt-2" type="reset">Reset</button>
            </div>

            <div className="mt-4 text-center">
              <p>Don't have an account yet? <Link to="/register">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
