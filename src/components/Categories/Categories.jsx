import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import StyledMenu from "./StyledMenu";
import eventsList from "./eventsList";

// TODO: Que cuando se hace click en la categoria, el usuario vea los eventos de  esa categoria. Si no hay eventos, mostrar un mensaje que diga algo como " No hay eventos disponibles todavia"

const CategoriesMenu = () => {
  const events = eventsList;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (header) => {
    handleClose();
    navigate(`/${header}`);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}>
        Categories
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {events.map((events) => (
          <MenuItem
            key={events.id}
            onClick={() => handleItemClick(events.type)}>
            {events.icon}
            {events.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default CategoriesMenu;
