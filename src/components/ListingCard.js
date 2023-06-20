import React, { useState } from "react";
//image src placeholder url: "https://via.placeholder.com/300x300"

function ListingCard({ id, image, description, location, handleDelete }) {
  const [favorite, setFavorite ] = useState(false)

  const handleFavClick = () => {
    setFavorite(!favorite)
  }

  const handleDelClick = () => {
    handleDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
