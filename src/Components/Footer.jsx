import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="card text-center">
      <div className="card-body bg-dark text-light py-4">
        <h5 className="card-title">Made With Love</h5>
        <p className="card-text">
          All Rights Reserved To Mifotra © {currentYear}
        </p>
      <NavLink to="/"><button className="btn btn-primary">Home Page</button> </NavLink>
      </div>
    </div>
  );
};

export default Footer;
