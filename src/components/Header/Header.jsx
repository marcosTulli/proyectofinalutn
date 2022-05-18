import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartStore from "../../utils/CartStore";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CategoriesMenu from "../Categories/Categories";

const Header = () => {
  const [itemCount, setItemCount] = useState(0);

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

  return (
    <nav
      className="navbar navbar-expand navbar-dark fixed-top bg-dark"
      style={{ marginBottom: "5rem" }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" className="navbar-brand">
                <h1>Get Your Tickets</h1>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/cart" className="nav-link">
                <AiOutlineShoppingCart className="bi bi-cart-plus-fill text-white font-xxlarge" />
                <span className="font-upper font-bold text-white ms-4">
                  <span className="font-xxlarge align-middle">{itemCount}</span>
                  <span className="align-middle ms-2">Tickets</span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <CategoriesMenu />
    </nav>
  );
};

export default Header;
