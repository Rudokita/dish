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

import twobugs from "./assets/twobugs.png";
import bird from "./assets/bird.png";
import bugred from "./assets/bugred.png";
import butterflies from "./assets/butterflies.png";
import scary from "./assets/scary.png";
import sward from "./assets/sward.png";
import dinosaur from "./assets/dinosaur.jpeg";
import sixbugs from "./assets/sixbugs.png";
import dog from "./assets/dog.jpeg";
import cat from "./assets/cat.jpeg";
import bluebug from "./assets/bluebug.png";
import pig from "./assets/pig.jpeg";

const sampleRecipes = [
  {
    id: 0,
    title: "Two Lovebugs",
    ingredients: "Digital in Adobe Fresco",

    image: twobugs,
    body: "I am an artist",
  },
  {
    id: 1,
    title: "Cowboy bird",
    ingredients: "Digital in Adobe Fresco",
    instructions: "Cook chicken and add curry paste.",
    image: bird,
    body: "Hallo there",
  },
  {
    id: 2,
    title: "Bug with the sun",
    ingredients: "Digital in Adobe Fresco",
    instructions: "Make dough, add toppings, bake in oven.",
    image: bugred,
    body: "hi hi hi",
  },
  {
    id: 3,
    title: "Butterfly collection",
    ingredients: "Digital in Adobe Fresco",
    instructions: "Toast bread, mash avocado, mix with lemon and salt, serve.",
    image: butterflies,
  },
  {
    id: 4,
    title: "Monsters",
    ingredients: "Digital in Adobe Fresco",
    instructions:
      "Mix all ingredients, cook on a heated pan until golden brown.",
    image: scary,
  },
  {
    id: 5,
    title: "Bug collection",
    ingredients: "Digital in Adobe Fresco",
    instructions:
      "Sauté garlic in butter, add shrimp, cook until pink, and drizzle with lemon juice.",
    image: sixbugs,
  },
  {
    id: 6,
    title: "Sward",
    ingredients: "Digital in Adobe Fresco",
    instructions:
      "Slice tomatoes and mozzarella, layer with basil, drizzle with olive oil and balsamic glaze.",
    image: sward,
  },
  {
    id: 7,
    title: "Birthday Bug",
    ingredients: "Digital in Adobe Fresco",
    instructions:
      "Cook chicken, add garlic, pasta, cream, and cheese. Simmer until pasta is tender.",
    image: bluebug,
  },
  {
    id: 8,
    title: "Snake Cat",
    ingredients: "Poinliner pen on paper",
    instructions:
      "Stir-fry vegetables in sesame oil, add garlic and soy sauce, and cook until tender.",
    image: cat,
  },
  {
    id: 9,
    title: "Scary Pig",
    ingredients: "Poinliner pen on paper",
    instructions:
      "Mix tuna with mayo and sriracha, spread on tortilla, add lettuce and avocado, then wrap.",
    image: pig,
  },
  {
    id: 10,
    title: "Dinosaur",
    ingredients: "Poinliner pen on paper",
    instructions:
      "Slice baguette, spread butter mixed with minced garlic, top with mozzarella, and bake at 180°C (350°F) for 10 minutes until golden and bubbly.",
    image: dinosaur,
  },
  {
    id: 11,
    title: "Dog",
    ingredients: "Poinliner pen on paper",
    instructions:
      "Mash bananas, mix with oats, honey, cinnamon, and chocolate chips. Bake at 180°C (350°F) for 12 minutes.",
    image: dog,
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
