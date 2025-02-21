import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const RecipeDetail = ({ recipes }) => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(recipeId));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Back Button - Positioned at the top left */}
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          borderRadius: "25px",
          backgroundColor: "#03396c",
          color: "white",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#6497b1",
          },
        }}
      >
        ← Back
      </Button>
    </div>
  );
};

export default RecipeDetail;
