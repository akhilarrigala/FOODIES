import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="card border-0 shadow rounded-3">
        <div className="card-body p-4 p-sm-5">
          <h5 className="card-title text-center mb-4 fw-light fs-4">Sign Up</h5>
          <form>
            <div className="form-floating mb-3">
              <input 
                type="text" 
                className="form-control" 
                id="floatingName" 
                placeholder="Full Name" 
                required 
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control" 
                id="floatingEmail" 
                placeholder="name@example.com" 
                required 
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
                required 
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-grid">
              <button className="btn btn-outline-primary text-uppercase" type="submit">
                Sign Up
              </button>
              <button className="btn btn-outline-danger text-uppercase mt-2" type="reset">
                Reset
              </button>
            </div>

            <div className="mt-4 text-center">
              <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
