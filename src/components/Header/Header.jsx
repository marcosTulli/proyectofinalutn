import React, { useEffect, useState } from "react";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { useMedia } from "react-media";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import CartStore from "../../utils/CartStore";
import eventsList from "../Categories/eventsList";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [logIn, setLogIn] = useState(false);
  const events = eventsList;
  const isMobile = useMedia({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

  const handleItemClick = (header) => {
    setMenuOpen(false);
    navigate(`/${header}`);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    CartStore.subscribe(() => {
      const state = CartStore.getState();
      if (state) {
        state.then((state) => {
          const itemCount = state.cart
            .map((item) => item.quantity)
            .reduce((p, n) => p + n, 0);
          setItemCount(itemCount);
        });
      }
    });
  }, []);

  const handleLogin = () => {
    setLogIn(true);
  };
  const menuButtons = () => (
    <div>
      {events.map((events) => (
        <MenuItem key={events.id} onClick={() => handleItemClick(events.type)}>
          {events.icon}
          {events.label}
        </MenuItem>
      ))}
    </div>
  );
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          {!logIn && (
            <div>
              <NavLink exact to="/" className="navbar-brand">
                <span>Get Your Tickets</span>
              </NavLink>
              <button onClick={handleLogin} className="btn btn-primary">
                <h2>login</h2>
              </button>
            </div>
          )}
          {logIn && (
            <div className="nav navbar-nav1">
              <div className="navbar-display">
                <ul>
                  <li>
                    <NavLink exact to="/" className="navbar-brand">
                      <span>Get Your Tickets</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/cart" className="nav-link">
                      <ul>
                        <li className="cart-logo">
                          <AiOutlineShoppingCart className="bi bi-cart-plus-fill text-white font-xxlarge" />
                        </li>
                        <li className="cart-logo">
                          <span className="font-upper font-bold text-white ms-4">
                            <span className="font-xxlarge align-middle">
                              {itemCount}
                            </span>
                            <span className="align-middle ms-2 cart-logo">
                              Tickets
                            </span>
                          </span>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="nav navbar-nav1">
                {events.map((events) => (
                  <span
                    className="btn"
                    key={events.id}
                    onClick={() => handleItemClick(events.type)}>
                    {events.icon}
                    {events.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
