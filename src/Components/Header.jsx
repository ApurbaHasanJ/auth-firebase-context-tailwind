import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";

const Header = () => {
  const {user, userSignOut} = useContext(UserContext)
  const handleSignOut = () => {
    userSignOut()
    .then(result => {})
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          Auth Master
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-lg">
          Home
        </Link>
        { user && <Link to="/orders" className="btn btn-ghost normal-case text-lg">
          Orders
        </Link>}
        {user && <Link to="/profile" className="btn btn-ghost normal-case text-lg">
          Profile
        </Link>}
        <Link to="/login" className="btn btn-ghost normal-case text-lg">
          Login
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-lg">
          Register
        </Link>
        {
          user ? 
          <>
          <span>{user.email}</span>
          <button onClick={handleSignOut} className="btn btn-xs">Sign Out</button>
          </> : <Link to="/login">Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
