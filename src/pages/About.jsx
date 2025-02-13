import React from "react";
import vegImage from "../assets/veg.jpg"; // ✅ Import the background image

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${vegImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      ></div>

      {/* Semi-Transparent Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)", // ✅ Dark overlay with 40% opacity
          zIndex: -1,
        }}
      ></div>

      {/* White Box Behind Text */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.85)", // ✅ White with slight transparency
          padding: "30px 50px",
          borderRadius: "12px", // ✅ Rounded corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // ✅ Soft shadow
          maxWidth: "900px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "black" }}>About DishDelights</h1>
        <h4
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            lineHeight: "1.6",
            color: "black",
          }}
        >
          Discover, create, and share your favorite recipes from around the
          world. At DishDelights, we bring together food lovers from all walks
          of life. Whether you’re a seasoned chef or just starting your culinary
          journey, our platform is designed to help you explore a vast
          collection of recipes that suit every taste and dietary preference.
          <br />
          <br />
          Browse through our extensive recipe catalog, save your favorites, and
          even contribute your own creations! Our easy-to-use interface ensures
          that you can quickly find, manage, and enjoy the best dishes from
          around the globe.
          <br />
          <br />
          <strong>We are located at:</strong>
          <br />
          456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria
        </h4>
      </div>
    </div>
  );
};

export default About;
