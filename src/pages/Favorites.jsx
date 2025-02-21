import React from "react";
import vegImage from "../assets/one.jpg"; // Background image
import cv_engPDF from "../assets/cv_eng.pdf"; // Import DishDelight PDF
import cv_dkPDF from "../assets/cv_dk.pdf"; // Import Trueskov PDF

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "auto",
        paddingTop: "100px",
        paddingBottom: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${vegImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      ></div>

      {/* Semi-Transparent Dark Overlay */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      {/* White Box for PDF Links */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          padding: "30px 50px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "900px",
          width: "90%",
          zIndex: 1,
          marginBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "black" }}>My CV</h1>

        {/* List of PDF Links */}
        <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
          <p>
            <a href={cv_engPDF} target="_blank" rel="noopener noreferrer">
              View CV in english PDF
            </a>
          </p>
          <p>
            <a href={cv_dkPDF} target="_blank" rel="noopener noreferrer">
              View CV in danish PDF
            </a>
          </p>
        </div>

        {/* Side-by-Side PDF Previews */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px", // ✅ Adds space between the PDFs
            marginTop: "20px",
            flexWrap: "wrap", // ✅ Ensures responsiveness on small screens
          }}
        >
          {/* DishDelight PDF */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <h3 style={{ color: "black" }}>Preview: CV in english PDF</h3>
            <iframe
              src={cv_engPDF}
              width="100%"
              height="400px"
              style={{ border: "none" }}
            ></iframe>
          </div>

          {/* Trueskov PDF */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <h3 style={{ color: "black" }}>Preview: CV in danish PDF</h3>
            <iframe
              src={cv_dkPDF}
              width="100%"
              height="400px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
