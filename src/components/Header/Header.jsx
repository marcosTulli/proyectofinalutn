import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import CartStore from "../../utils/CartStore";
import eventsList from "./eventsList";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [itemCount, setItemCount] = useState(0);
  const [logIn, setLogIn] = useState(false);
  const events = eventsList;
  const navigate = useNavigate();

  const handleItemClick = (header) => {
    navigate(`/${header}`);
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
  return (
    <nav className="navbar navbar-expand ">
      <div className="container-fluid">
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
                  <div style={{ paddingRight: ".5em" }}>{events.icon}</div>
                  {events.label}
                </span>
              ))}
            </div>
          </div>
        )}
        {!logIn && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink exact to="/" className="navbar-brand">
              <span>Get Your Tickets</span>
            </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <button onClick={handleLogin} className="btn btn-primary">
                    <span>Enter as guest</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
