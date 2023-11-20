import React from "react";
import { NavLink } from "react-router-dom";

export function CharacterCard({ character }) {
  return (
    <NavLink to={`/character/${character.id}`} className="card-character">
      <div className="card-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="card-info">
        <h3>{character.name}</h3>
      </div>
    </NavLink>
  );
}
