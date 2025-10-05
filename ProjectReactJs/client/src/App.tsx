import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Board";
import './index.css'

export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                 <Route path="/signup" element={<SignUp />} />
                 <Route path="/signin" element={<SignIn />} />
                 <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/board" element={<Board />} />
            </Routes>
        </Router>
    </div>
    
  );
}
