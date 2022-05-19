import React, { useState } from "react";
import eventsList from "../Categories/eventsList";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const events = eventsList;
  const navigate = useNavigate();
  const handleItemClick = (header) => {
    setMenuOpen(false);
    navigate(`/${header}`);
  };
  return (
    <div className={classes.largeNav}>
      {events.map((events) => (
        <MenuItem key={events.id} onClick={() => handleItemClick(events.type)}>
          {events.icon}
          {events.label}
        </MenuItem>
      ))}
    </div>
  );
};

export default Menu;
