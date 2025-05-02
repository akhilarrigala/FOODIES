import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { StoreContext } from '../../context/storeContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../service/authService';


const Login = () => {
  const{setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(data);
      if (response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/');
        
      } else {
        toast.error('Invalid login. Please try again.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="card border-0 shadow rounded-3">
        <div className="card-body p-4 p-sm-5">
          <h5 className="card-title text-center mb-4 fw-light fs-4">Sign In</h5>
          <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                name="email"
                placeholder="name@example.com"
                value={data.email}
                onChange={onChangeHandler}
                required
              />
              <label htmlFor="floatingInput">Email address</label>
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
