import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { registerUser } from '../../service/authService';

const Register = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add your form submission logic here (API call, etc.)
    // console.log('Form Submitted', data);
    try {
      const response = await registerUser(data);
      if(response.status === 201){
        toast.success('Registration successful! Please login');
        navigate('/login');
      } else{
        toast.error('Unable to register. Please try again.');
      }
      
    } catch (error) {
      toast.error('Unable to register. Please try again.');
    }
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="card border-0 shadow rounded-3">
        <div className="card-body p-4 p-sm-5">
          <h5 className="card-title text-center mb-4 fw-light fs-4">Sign Up</h5>
          <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={onChangeHandler}
                required
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                name="email"
                placeholder="name@example.com"
                value={data.email}
                onChange={onChangeHandler}
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={onChangeHandler}
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
