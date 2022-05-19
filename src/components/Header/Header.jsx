import React, { useEffect, useState } from "react";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { useMedia } from "react-media";
import classes from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import CartStore from "../../utils/CartStore";
import eventsList from "../Categories/eventsList";
import MenuItem from "@mui/material/MenuItem";
import Menu from "../Menu/Menu";

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

  const menuButtons = () => (
    <div className={classes.largeNav}>
      {events.map((events) => (
        <MenuItem key={events.id} onClick={() => handleItemClick(events.type)}>
          {events.icon}
          {events.label}
        </MenuItem>
      ))}
    </div>
  );
  return (
    <header className={classes.mainheader}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <NavLink exact to="/" className="navbar-brand">
              <span>Get Your Tickets</span>
            </NavLink>
          </li>
          <div>
            {isMobile ? (
              <ul className={classes.mobileNav}>
                <li className={classes.listItem}></li>
                <li className={classes.listItem}>
                  <MdMenu onClick={toggleMenu} />
                </li>
              </ul>
            ) : (
              <Menu />
              // menuButtons()
            )}
          </div>
        </ul>
      </nav>
      {isMobile && menuOpen && (
        <div className={classes.menu}>
          <MdOutlineClose
            className={classes.close}
            onClick={() => setMenuOpen(false)}
          />
          {<Menu />}
        </div>
      )}
    </header>
  );
}

export default Header;
