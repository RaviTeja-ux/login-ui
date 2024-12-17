import React from "react";
import { useSelector } from 'react-redux'; 


const Welcome = () => {
    const username = useSelector((state) => state.user.userInputName);
  return (
    <div>
      <h1>Welcome! {username}</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;
