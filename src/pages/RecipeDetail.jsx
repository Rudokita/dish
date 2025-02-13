import { useParams, useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const RecipeDetail = ({ recipes }) => {
  const { recipeId } = useParams();
  const navigate = useNavigate(); // ✅ Enables navigation back

  const recipe = recipes.find((r) => r.id === parseInt(recipeId)); // ✅ Convert ID to number

  if (!recipe) {
    return <h2>Recipe not found</h2>; // ✅ Handles invalid IDs
  }

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
        backgroundImage: `url(${recipe.image})`, // ✅ Use the recipe image as background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ✅ Keeps it fixed while scrolling
        zIndex: 1,
      }}
    >
      {/* ✅ Semi-Transparent Dark Overlay for Better Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // ✅ Dark overlay
          zIndex: 2,
        }}
      ></div>

      {/* ✅ Centered Content Box */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          backgroundColor: "rgba(255, 255, 255, 0.85)", // ✅ Semi-transparent white box
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "800px",
          width: "90%",
        }}
      >
        {/* ✅ Back Button at the Top Left Inside the Box */}
        <Button
          variant="contained"
          onClick={() => navigate(-1)} // ✅ Navigates back
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            borderRadius: "25px",
            backgroundColor: "#4CAF50",
            color: "white",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#66bb6a",
            },
          }}
        >
          ← Back to Recipes
        </Button>

        {/* ✅ Recipe Title */}
        <Typography variant="h2" sx={{ fontWeight: "bold", marginTop: "40px" }}>
          {recipe.title}
        </Typography>

        {/* ✅ Ingredients Section */}
        <Typography variant="h5" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          Ingredients:
        </Typography>
        <Typography variant="h6" sx={{ lineHeight: "1.6" }}>
          {recipe.ingredients}
        </Typography>

        {/* ✅ Instructions Section */}
        <Typography variant="h5" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          Instructions:
        </Typography>
        <Typography variant="h6" sx={{ lineHeight: "1.6" }}>
          {recipe.instructions}
        </Typography>
      </Box>
    </div>
  );
};

export default RecipeDetail;
