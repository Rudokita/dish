import React from "react";
import styles from "./Favorites.module.css"; // ✅ Use the same CSS as Favorites

function RecipeForm({ currentRecipe, handleChange, handleSubmit, isEditing }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={currentRecipe.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <textarea
          name="ingredients"
          value={currentRecipe.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea
          name="instructions"
          value={currentRecipe.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{isEditing ? "Update" : "Create"} Recipe</button>
    </form>
  );
}

export default RecipeForm;
