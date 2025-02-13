import React from "react";
import { Container, Typography, Box } from "@mui/material";
import meal from "../assets/meal.jpg";
import styles from "./Home.module.css"; // Import CSS file
import Header from "../components/Header"; // ✅ Ensure Navbar is included

const Home = () => (
  <div className={styles.pageBackground}>
    <Header /> {/* ✅ Add Navbar back to the page */}
    <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
      <Box className={styles.textBox}>
        <Typography variant="h3" gutterBottom>
          Hey foodie! Welcome to DishDelights!
        </Typography>
        <Typography variant="h6" paragraph>
          Explore a world of flavors with our curated collection of
          mouthwatering recipes. Whether you're a home cook looking for
          inspiration or an experienced chef, DishDelights provides you with
          easy-to-follow instructions to create delicious meals.
        </Typography>
      </Box>
    </Container>
  </div>
);

export default Home;
