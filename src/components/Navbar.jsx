import React, { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { actions } from "../features/userReducer"
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoggedIn(true);
    dispatch(actions.loginEmail(email));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <nav className="navbar">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
        <h3>Items in cart: {cartItems.length}</h3>
      </div>
      <div className="login">
        {loggedIn ? (
          <div>
            <div>Welcome, {email}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
