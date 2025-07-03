import React, { useState } from "react";
import { dummyRecipes } from "../assets/dummyRecipes";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

/**
 * PUBLIC_INTERFACE
 * RecipeList - renders a grid/list of RecipeCard components
 */
function RecipeList() {
  // Example: favorited states for demo (dev, would use IDs in production)
  const [favorites, setFavorites] = useState(Array(dummyRecipes.length).fill(false));

  const handleFavoriteToggle = idx => {
    setFavorites(favs => favs.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div className="recipe-list__container">
      {dummyRecipes.map((recipe, idx) => (
        <RecipeCard
          key={recipe.title + idx}
          image={recipe.image}
          title={recipe.title}
          subtitle={recipe.subtitle}
          tags={recipe.tags}
          alt={recipe.alt}
          favorite={favorites[idx]}
          onFavorite={() => handleFavoriteToggle(idx)}
          onClick={() => { /* navigate to /details, left for full app */ }}
        />
      ))}
    </div>
  );
}

export default RecipeList;
