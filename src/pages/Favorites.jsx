import React, { useState, useEffect } from "react";
import styles from "./Favorites.module.css";
// ✅ Make sure this path is correct
import { Heart } from "lucide-react";
import RecipeForm from "./RecipeForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";

function Favorites() {
  const [recipes, setRecipes] = useState(() => {
    const storedRecipes = localStorage.getItem("favoriteRecipes");
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });
  const [currentRecipe, setCurrentRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [liked, setLiked] = useState(Array(recipes.length).fill(false));
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(recipes));
  }, [recipes]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentRecipe({ ...currentRecipe, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      const updatedRecipes = recipes.map((recipe, index) =>
        index === editIndex ? currentRecipe : recipe
      );
      setRecipes(updatedRecipes);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setRecipes([...recipes, currentRecipe]);
    }
    setCurrentRecipe({ title: "", ingredients: "", instructions: "" });
  }

  function handleDelete(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  function handleEdit(index) {
    setCurrentRecipe(recipes[index]);
    setIsEditing(true);
    setEditIndex(index);
  }

  function toggleLike(index) {
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  }

  function openRecipeDetail(recipe) {
    setSelectedRecipe(recipe);
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
    setSelectedRecipe(null);
  }

  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <h1>Favorite Recipes</h1>
        <RecipeForm
          currentRecipe={currentRecipe}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
        />
        <h2>Recipes</h2>
        <ul className={styles.recipeList}>
          {recipes.map((recipe, index) => (
            <li key={index} className={styles.recipeItem}>
              <h3
                onClick={() => openRecipeDetail(recipe)}
                style={{ cursor: "pointer", color: "blue" }}
              >
                {recipe.title}
              </h3>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <Heart
                size={24}
                color={liked[index] ? "red" : "gray"}
                fill={liked[index] ? "red" : "none"}
                onClick={() => toggleLike(index)}
                style={{ cursor: "pointer" }}
              />
            </li>
          ))}
        </ul>

        {/* Recipe Details Dialog */}
        <Dialog open={isDialogOpen} onClose={closeDialog}>
          {selectedRecipe && (
            <Box className={styles.dialogBox}>
              <DialogTitle className={styles.dialogTitle}>
                {selectedRecipe.title}
              </DialogTitle>
              <DialogContent className={styles.dialogContent}>
                <p>
                  <strong>Ingredients:</strong> {selectedRecipe.ingredients}
                </p>
                <p>
                  <strong>Instructions:</strong> {selectedRecipe.instructions}
                </p>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog} className={styles.dialogButton}>
                  Close
                </Button>
              </DialogActions>
            </Box>
          )}
        </Dialog>
      </div>
    </div>
  );
}

export default Favorites;
