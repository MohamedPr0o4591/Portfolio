import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import HomeSection from "./pages/home/outlets/HomeSection";
import ErrPage from "../pages/error/ErrPage";

function Admin() {
  return (
    <div className="Admin">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<HomePage />}>
          <Route index element={<HomeSection />} />
          <Route path="about" element={<h1>Hello</h1>} />
        </Route>
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </div>
  );
}

export default Admin;
