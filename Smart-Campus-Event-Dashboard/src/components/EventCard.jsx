import { memo } from "react";

function EventCard({ id, title, category, description, isFavourite, onToggleFavourite }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p className="event-category">Category: {category}</p>
      <p>{description}</p>
      <button onClick={() => onToggleFavourite(id, isFavourite)}>
        {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default memo(EventCard);