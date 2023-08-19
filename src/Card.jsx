import React from "react";

function Card({ title, year, poster, type }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"}
        alt={title}
      />
      <h3 className="movie-title">{title}</h3>
      <h3>{type.toUpperCase()}</h3>
      <h3>{year}</h3>
    </div>
  );
}

export default Card;
