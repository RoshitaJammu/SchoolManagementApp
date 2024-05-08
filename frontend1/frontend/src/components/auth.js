import React, { useState } from 'react';
import "./auth.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(true);
  const navigate = useNavigate(); 

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:5001/api/auth/login`, { email, password });

    localStorage.setItem("token",response.data.token)
    navigate('/app')
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:5001/api/auth/signup`, { email: email1, password: password1 });

    localStorage.setItem("token",response.data.token)
    navigate('/app')

  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${showLoginForm ? 'login' : 'signup'}`}>{showLoginForm ? 'Login Form' : 'Signup Form'}</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" defaultChecked={showLoginForm} onChange={toggleForm} />
          <input type="radio" name="slide" id="signup" defaultChecked={!showLoginForm} onChange={toggleForm} />
          <label htmlFor="login" className={`slide ${showLoginForm ? 'login' : 'signup'}`}>Login</label>
          <label htmlFor="signup" className={`slide ${!showLoginForm ? 'login' : 'signup'}`}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={showLoginForm ? handleLoginSubmit : handleSignupSubmit} className={showLoginForm ? 'login' : 'signup'}>
            <div className="field">
              <input type="text" value={showLoginForm ? email : email1} onChange={(e) => showLoginForm ? setEmail(e.target.value) : setEmail1(e.target.value)} placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" value={showLoginForm ? password : password1} onChange={(e) => showLoginForm ? setPassword(e.target.value) : setPassword1(e.target.value)} placeholder="Password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value={showLoginForm ? 'Login' : 'Signup'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
