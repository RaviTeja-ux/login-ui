import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/Login";
import Welcome from "./components/home/Welcome";
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
