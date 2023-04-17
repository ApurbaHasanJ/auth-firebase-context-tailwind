import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          Auth Master
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-lg">
          Home
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-lg">
          Login
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-lg">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
