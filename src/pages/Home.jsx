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
          Welcome to my portfolio website
        </Typography>
        <br></br>
        <br></br>
        <Typography variant="h6" paragraph>
          Hi, I’m Michalina Obrycka, a Multimedia Design student at
          Erhvervsakademi Aarhus. Originally from Poland, I’m 21 years old and
          have been living in Denmark for almost three years. During this time,
          I’ve learned to speak Danish and embraced the creative opportunities
          around me.
          <br></br>
          <br></br>My passion lies in UX/UI design, as well as graphic design,
          interior design, and product design. In my free time, I love drawing
          and designing—both digitally and on paper. I also enjoy working on
          personal programming projects, including this website. My technical
          skills include JavaScript, React, HTML, and CSS, and I primarily work
          in VS Code. <br></br>
          <br></br>Beyond design and coding, I’m the band leader, lead singer,
          and songwriter for an alternative rock band called 37Problemz, where I
          also manage our Instagram page. <br></br>
          <br></br>Recently, I’ve taken up tattooing, a new creative outlet that
          I’m excited to explore further as a potential career path. <br></br>
          <br></br>Let’s connect and create something amazing together!
        </Typography>
      </Box>
    </Container>
  </div>
);

export default Home;
