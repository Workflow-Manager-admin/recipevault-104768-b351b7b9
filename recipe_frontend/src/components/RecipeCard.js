import React from "react";
import "./RecipeCard.css";

/**
 * PUBLIC_INTERFACE
 * RecipeCard - displays a visually appealing, modern recipe card UI.
 *
 * Props:
 * - image: image file (required)
 * - title: string, recipe title (required)
 * - subtitle: string, e.g. course/cuisine/category
 * - tags: array of strings for accent metadata (e.g. ["Vegan", "Easy"])
 * - alt: string, descriptive image alt text
 * - onClick: function, action when clicking the card or button
 * - favorite: boolean, whether recipe is favorited
 * - onFavorite: function, action for toggling favorite status
 */
function RecipeCard({
  image,
  title,
  subtitle,
  tags = [],
  alt,
  onClick,
  favorite = false,
  onFavorite,
}) {
  return (
    <div className="recipe-card" tabIndex={0} onClick={onClick} role={onClick ? "button" : undefined}>
      <div className="recipe-card__image-wrapper">
        <img src={image} alt={alt || title} className="recipe-card__image" />
        <button
          className={`recipe-card__favorite${favorite ? " favorited" : ""}`}
          aria-label={favorite ? "Unfavorite recipe" : "Favorite recipe"}
          onClick={e => {
            e.stopPropagation();
            if (onFavorite) onFavorite();
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill={favorite ? "var(--accent-red)" : "none"} stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 19l-1.45-1.32C5.4 13.36 2 10.28 2 7.5 2 5.42 3.92 4 6.1 4c1.54 0 3.04 1.04 3.57 2.36h.66C12.86 5.04 14.36 4 15.9 4 18.08 4 20 5.42 20 7.5c0 2.78-3.4 5.86-7.55 10.18L11 19z"/>
          </svg>
        </button>
      </div>
      <div className="recipe-card__content">
        <h2 className="recipe-card__title">{title}</h2>
        <div className="recipe-card__subtitle">{subtitle}</div>
        <div className="recipe-card__tags">
          {tags.map((tag, idx) => (
            <span className="recipe-card__tag" key={idx}>{tag}</span>
          ))}
        </div>
        <div className="recipe-card__footer">
          <button
            className="recipe-card__action"
            tabIndex={0}
            onClick={e => {
              e.stopPropagation(); // avoid double navigation
              if (onClick) onClick();
            }}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
