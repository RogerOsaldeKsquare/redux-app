import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { selectAuthEmail, selectAuthPassword, selectAuthError, selectIsAuthenticated } from "../features/auth/authSelectors";
import { setUserEmail, setUserPassword, authUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import login from '../assets/loginI'
import '../App.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(selectAuthEmail);
  const password = useSelector(selectAuthPassword);
  const error = useSelector(selectAuthError);
  const isAuth = useSelector(selectIsAuthenticated);

  const handleLoginEmail = (event) => {
    event.preventDefault();
    dispatch(authUser());
    if (!isAuth){
      return
    }
    navigate('/posts');
  };

  const handleEmailChange = (event) => {
    dispatch(setUserEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setUserPassword(event.target.value));
  };

  const isValidLogin = () => {
    return email?.length && password?.length;
  };

  return (
  <>

    <div className="image-container">
        <img  style={{ width: 700, height: 650 }} src={login[0]}  alt={login}/>
        </div> 
    <form onSubmit={handleLoginEmail}>
      <div>
        <TextField
          label="Email"
          placeholder="test@test.com"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
          fullWidth
        ></TextField>
        <div></div>
        <TextField
          label="Password"
          placeholder="password"
          type={"password"}
          name="password"
          required
          value={password}
          onChange={handlePasswordChange}
          fullWidth
        ></TextField>
      </div>

      <div>
        <div className={"Button"}>
          <Button type="submit" disabled={!isValidLogin()} fullWidth variant="contained">
          LOG IN
          </Button>
        </div>
      </div>
    </form>
    </>
  );
}

export default Login;
