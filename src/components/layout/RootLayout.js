import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Alert from "../Alert";

const RootLayout = () => {
  return (
    <>
      <Navbar icon="fab fa-github" title="Github Finder" />
      <div className="container">
        <Alert />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
