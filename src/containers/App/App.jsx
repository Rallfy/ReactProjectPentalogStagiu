import "./App.css";
import React from "react";
import Login from "../Login";
import Root from "../Root";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "../Register";
import StartPage from "../StartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>
        <Route>
          <Route path="/" element={<StartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Root />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
