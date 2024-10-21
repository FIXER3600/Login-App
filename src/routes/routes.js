import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
	<Route path="/recoverPassword" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoutes;