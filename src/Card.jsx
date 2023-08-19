import React from "react";

function Card({ title, year, poster }) {
  return (
    <div>
      <img
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"}
        alt={title}
      />
      <h2>{title}</h2>
      <h2>{year}</h2>
    </div>
  );
}

export default Card;
