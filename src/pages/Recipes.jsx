import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
import styles from "../pages/Recipes.module.css"; // Ensure the correct path for CSS

import {
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const sampleRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: "Eggs, Pasta, Bacon",
    instructions: "Cook pasta and mix with other ingredients.",
    image: "path/to/pasta.jpg",
  },
  {
    id: 2,
    title: "Chicken Curry",
    ingredients: "Chicken, Curry Paste, Coconut Milk",
    instructions: "Cook chicken and add curry paste.",
    image: "path/to/curry.jpg",
  },
  {
    id: 3,
    title: "Margherita Pizza",
    ingredients: "Flour, Tomatoes, Mozzarella, Basil",
    instructions: "Make dough, add toppings, bake in oven.",
    image: "path/to/pizza.jpg",
  },
  {
    id: 4,
    title: "Avocado Toast",
    ingredients: "Bread, Avocado, Lemon, Salt",
    instructions: "Toast bread, mash avocado, mix with lemon and salt, serve.",
    image: "path/to/avocado.jpg",
  },
  {
    id: 5,
    title: "Classic Pancakes",
    ingredients: "Flour, Eggs, Milk, Sugar, Baking Powder, Butter",
    instructions:
      "Mix all ingredients, cook on a heated pan until golden brown.",
    image: "path/to/pancakes.jpg",
  },
  {
    id: 6,
    title: "Garlic Butter Shrimp",
    ingredients: "Shrimp, Garlic, Butter, Lemon, Parsley",
    instructions:
      "Sauté garlic in butter, add shrimp, cook until pink, and drizzle with lemon juice.",
    image: "path/to/shrimp.jpg",
  },
  {
    id: 7,
    title: "Caprese Salad",
    ingredients:
      "Tomatoes, Mozzarella, Basil, Olive Oil, Balsamic Glaze, Salt, Pepper",
    instructions:
      "Slice tomatoes and mozzarella, layer with basil, drizzle with olive oil and balsamic glaze.",
    image: "path/to/caprese.jpg",
  },
  {
    id: 8,
    title: "One-Pot Chicken Alfredo",
    ingredients: "Chicken, Pasta, Heavy Cream, Parmesan, Garlic, Butter",
    instructions:
      "Cook chicken, add garlic, pasta, cream, and cheese. Simmer until pasta is tender.",
    image: "path/to/alfredo.jpg",
  },
  {
    id: 9,
    title: "Veggie Stir-Fry",
    ingredients:
      "Broccoli, Bell Peppers, Carrots, Soy Sauce, Garlic, Sesame Oil",
    instructions:
      "Stir-fry vegetables in sesame oil, add garlic and soy sauce, and cook until tender.",
    image: "path/to/stir.jpg",
  },
  {
    id: 10,
    title: "Spicy Tuna Wrap",
    ingredients: "Tortilla, Canned Tuna, Mayo, Sriracha, Lettuce, Avocado",
    instructions:
      "Mix tuna with mayo and sriracha, spread on tortilla, add lettuce and avocado, then wrap.",
    image: "path/to/wrap.jpg",
  },
  {
    id: 11,
    title: "Cheesy Garlic Bread",
    ingredients: "Baguette, Butter, Garlic, Mozzarella Cheese, Parsley",
    instructions:
      "Slice baguette, spread butter mixed with minced garlic, top with mozzarella, and bake at 180°C (350°F) for 10 minutes until golden and bubbly.",
    image: "path/to/garlic.jpg",
  },
  {
    id: 12,
    title: "Banana Oat Cookies",
    ingredients: "Bananas, Oats, Honey, Cinnamon, Chocolate Chips",
    instructions:
      "Mash bananas, mix with oats, honey, cinnamon, and chocolate chips. Bake at 180°C (350°F) for 12 minutes.",
    image: "path/to/cookies.jpg",
  },
];

const Recipes = ({ sampleRecipes }) => {
  const [search, setSearch] = useState("");
  const filteredRecipes = sampleRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.recipesPage}>
      <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h1" gutterBottom>
          DRAWINGS
        </Typography>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Alphabetically..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Grid container spacing={3}>
          {filteredRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <Card>
                  <CardContent>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Typography variant="h6">{recipe.title}</Typography>
                    <Typography variant="body2">
                      <strong>Technique:</strong> {recipe.ingredients}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Recipes;
