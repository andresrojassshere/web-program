import React, { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { CharacterCard } from "./CharacterCard";
import "../website/pages/Multiverse.css"


export function CharacterList() {
  const { someCharacters } = useContext(CharacterContext);
  return (
    <>
      <div className="character-card container">
        {someCharacters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </>
  );
}
