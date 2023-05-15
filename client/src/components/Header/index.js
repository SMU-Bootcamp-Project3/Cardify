import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./header.css";
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
     <div className="container flex-row justify-space-between-lg justify-center align-center">
       <div>
       <h1 style={{ fontFamily: `'Fuzzy Bubbles', cursive`}}>Cardify</h1>
         <Link className="text-light" to="/">
          
         </Link>
         <p className="m-0"></p>
       </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
              <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>

            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;