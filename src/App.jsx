import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RecipeDetail from "./pages/RecipeDetail";

import pasta from "./assets/pasta.jpg";
import curry from "./assets/curry.jpg";
import pizza from "./assets/pizza.jpg";
import avocado from "./assets/avocado.jpg";
import pancakes from "./assets/pancakes.jpg";
import caprese from "./assets/caprese.jpg";
import garlic from "./assets/garlic.jpg";
import shrimp from "./assets/shrimp.jpg";
import cookies from "./assets/cookies.jpg";
import stir from "./assets/stir.jpg";
import alfredo from "./assets/alfredo.jpg";
import wrap from "./assets/wrap.jpg";

const sampleRecipes = [
  {
    id: 0,
    title: "Spaghetti Carbonara",
    ingredients: "Eggs, Pasta, Bacon",
    instructions: "Cook pasta and mix with other ingredients.",
    image: pasta,
  },
  {
    id: 1,
    title: "Chicken Curry",
    ingredients: "Chicken, Curry Paste, Coconut Milk",
    instructions: "Cook chicken and add curry paste.",
    image: curry,
  },
  {
    id: 2,
    title: "Margherita Pizza",
    ingredients: "Flour, Tomatoes, Mozzarella, Basil",
    instructions: "Make dough, add toppings, bake in oven.",
    image: pizza,
  },
  {
    id: 3,
    title: "Avocado Toast",
    ingredients: "Bread, Avocado, Lemon, Salt",
    instructions: "Toast bread, mash avocado, mix with lemon and salt, serve.",
    image: avocado,
  },
  {
    id: 4,
    title: "Classic Pancakes",
    ingredients: "Flour, Eggs, Milk, Sugar, Baking Powder, Butter",
    instructions:
      "Mix all ingredients, cook on a heated pan until golden brown.",
    image: pancakes,
  },
  {
    id: 5,
    title: "Garlic Butter Shrimp",
    ingredients: "Shrimp, Garlic, Butter, Lemon, Parsley",
    instructions:
      "Sauté garlic in butter, add shrimp, cook until pink, and drizzle with lemon juice.",
    image: shrimp,
  },
  {
    id: 6,
    title: "Caprese Salad",
    ingredients:
      "Tomatoes, Mozzarella, Basil, Olive Oil, Balsamic Glaze, Salt, Pepper",
    instructions:
      "Slice tomatoes and mozzarella, layer with basil, drizzle with olive oil and balsamic glaze.",
    image: caprese,
  },
  {
    id: 7,
    title: "One-Pot Chicken Alfredo",
    ingredients: "Chicken, Pasta, Heavy Cream, Parmesan, Garlic, Butter",
    instructions:
      "Cook chicken, add garlic, pasta, cream, and cheese. Simmer until pasta is tender.",
    image: alfredo,
  },
  {
    id: 8,
    title: "Veggie Stir-Fry",
    ingredients:
      "Broccoli, Bell Peppers, Carrots, Soy Sauce, Garlic, Sesame Oil",
    instructions:
      "Stir-fry vegetables in sesame oil, add garlic and soy sauce, and cook until tender.",
    image: stir,
  },
  {
    id: 9,
    title: "Spicy Tuna Wrap",
    ingredients: "Tortilla, Canned Tuna, Mayo, Sriracha, Lettuce, Avocado",
    instructions:
      "Mix tuna with mayo and sriracha, spread on tortilla, add lettuce and avocado, then wrap.",
    image: wrap,
  },
  {
    id: 10,
    title: "Cheesy Garlic Bread",
    ingredients: "Baguette, Butter, Garlic, Mozzarella Cheese, Parsley",
    instructions:
      "Slice baguette, spread butter mixed with minced garlic, top with mozzarella, and bake at 180°C (350°F) for 10 minutes until golden and bubbly.",
    image: garlic,
  },
  {
    id: 11,
    title: "Banana Oat Cookies",
    ingredients: "Bananas, Oats, Honey, Cinnamon, Chocolate Chips",
    instructions:
      "Mash bananas, mix with oats, honey, cinnamon, and chocolate chips. Bake at 180°C (350°F) for 12 minutes.",
    image: cookies,
  },
];

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ✅ Default Home Page */}
        <Route path="/" element={<Home />} />

        {/* ✅ Pass recipes to Recipes & RecipeDetail */}
        <Route
          path="/recipes"
          element={<Recipes sampleRecipes={sampleRecipes} />}
        />
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetail recipes={sampleRecipes} />}
        />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
