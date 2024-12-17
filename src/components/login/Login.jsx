import React, { useState } from "react";
import LoginPage, { Username, Password, Submit } from "@react-login-page/page5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; 
import { setUserInputName } from "../../redux/userSlice";


const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.length > 4 & password.length > 8){
        dispatch(setUserInputName(username));
        navigate("/welcome");
    }
    else{
        alert('Username should be a minimum of 4 characters \nPassword should be a minimum of 8 characters')
    }
    
  };

  return (
    <div>
      <LoginPage style={{ height: "100vh" }}>
        <Username
          name="username"
          placeholder="Username"
          onChange={(e) => {
            // console.log(e.target.value,"hghghghgh")
            setUsername(e.target.value);
          }}
        />
        <Password
          name="password"
          placeholder="Password"
          onChange={(e) => {
            // console.log(e.target.value,"fdfdfd")
            setPassword(e.target.value);
          }}
        />
        <Submit onClick={handleSubmit}>Submit</Submit>
      </LoginPage>
    </div>
  );
};

export default LoginComponent;
