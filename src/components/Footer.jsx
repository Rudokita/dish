import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c3e50",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: "auto",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Michalina Obrycka
      </Typography>
    </Box>
  );
};

export default Footer;
