import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MusicNoteSharpIcon from "@mui/icons-material/MusicNoteSharp";
import LocalMoviesSharpIcon from "@mui/icons-material/LocalMoviesSharp";
import TheaterComedySharpIcon from "@mui/icons-material/TheaterComedySharp";
import { useNavigate } from "react-router-dom";
import StyledMenu from "./StyledMenu";

// TODO: Que cuando se hace click en la categoria, el usuario vea los eventos de  esa categoria. Si no hay eventos, mostrar un mensaje que diga algo como " No hay eventos disponibles todavia"

const CategoriesMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConcertClick = () => {
    handleClose();
    navigate("/events");
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
        <MenuItem onClick={handleClose}>
          <SportsBasketballIcon />
          Sports
        </MenuItem>
        <MenuItem onClick={handleConcertClick}>
          <MusicNoteSharpIcon />
          Concerts
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <LocalMoviesSharpIcon />
          Movies
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <TheaterComedySharpIcon />
          Theater
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default CategoriesMenu;
