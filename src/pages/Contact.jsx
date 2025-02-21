import React from "react";
import foodImage from "../assets/butterflies.png"; // ✅ Import image from assets

const Contact = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // ✅ Allows scrolling if needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "fixed", // ✅ Fixed to cover the whole screen
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${foodImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2, // ✅ Ensures it stays behind content
        }}
      ></div>

      {/* Semi-Transparent Dark Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // ✅ Dark overlay with 40% opacity
          zIndex: -1, // ✅ Ensures overlay is above background image
        }}
      ></div>

      {/* Content Box */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.85)", // ✅ White with slight transparency
          padding: "40px",
          borderRadius: "15px", // ✅ Rounded corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // ✅ Soft shadow
          maxWidth: "900px",
          textAlign: "center",
          position: "relative",
          zIndex: 1, // ✅ Ensures content stays on top
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "black", marginBottom: "20px" }}>
          Contact Me
        </h1>
        <h4
          style={{ fontSize: "1.5rem", color: "black", marginBottom: "10px" }}
        >
          📧 Email: michalina.obrycka@icloud.com
        </h4>
        <h4
          style={{ fontSize: "1.5rem", color: "black", marginBottom: "10px" }}
        >
          📞 Phone: +45 52 90 43 20
        </h4>
        <h4 style={{ fontSize: "1.5rem", color: "black" }}>
          📷 Instagram: @obryckart
        </h4>
        <h4 style={{ fontSize: "1.5rem", color: "black" }}>
          🔗 LinkedIn: Michalina Obrycka
        </h4>
      </div>
    </div>
  );
};

export default Contact;
