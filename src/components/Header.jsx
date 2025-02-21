import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.css"; // Import CSS for navbar styling

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#2c3e50", padding: "0.5rem 0" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            className={styles.navTitle} // Apply styling
          >
            PORTFOLIO Michalina Obrycka
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/recipes"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              Drawings
            </Button>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/favorites"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              CV eng/dk
            </Button>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              UX/UI Projects
            </Button>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              Contact
            </Button>
          </Box>
          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile Navigation Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {["Home", "Recipes", "Favorites", "About", "Contact"].map(
            (text, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={`/${text.toLowerCase()}`}
                onClick={handleDrawerToggle}
                className={styles.navLink}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
