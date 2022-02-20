import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Fundwallet from "./pages/fundWallet";
import Withdraw from "./pages/withdraw";
import BankDeets from "./pages/bank";
import Profile from "./pages/profile";

const App =() => {

  const isauthenticated = !!sessionStorage.getItem('user')

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/fund-wallet" element={<Fundwallet />} exact />
       
        <Route path="/withdraw" element={<Withdraw />} exact />
        <Route path="/update-bank" element={<BankDeets />} exact />
        <Route path="/dashboard" element={isauthenticated ? <Dashboard /> : <SigninPage />} exact />
        <Route path="/update-profile" element={<Profile />} exact />
      </Routes>
    </Router>
  );
} 

export default App;
