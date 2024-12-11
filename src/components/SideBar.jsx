import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Tasks", icon: <TaskIcon />, path: "/tasks" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Assign Task", icon: <TaskIcon />, path: "/assign-task" },
    { text: "Logout", icon: <LogoutIcon />, path: "/logout" },
  ];

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Task Management System © 2024
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
