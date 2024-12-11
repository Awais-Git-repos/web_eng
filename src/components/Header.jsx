import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Management System
        </Typography>
        <Button
          color="inherit"
          startIcon={<AccountCircleIcon />}
          onClick={() => console.log("Profile Clicked")}
        >
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
