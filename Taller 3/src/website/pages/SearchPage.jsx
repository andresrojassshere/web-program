import React from "react";
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { useLocation } from "react-router-dom";
import { CharacterCard } from "../../components/CharacterCard";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function SearchPage() {
  const location = useLocation();
  const { allCharacters } = useContext(CharacterContext);

  const filteredCharacters = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(location.state.toLowerCase())
  );

  return (
    <div>
      <p>
        We have found <span>{filteredCharacters.length}</span> results:
      </p>
      <div>
        {filteredCharacters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
      <div>
        <NavLink to="/multiverse">
          <Button className="hover:bg-[#c0df40]">Go back</Button>
        </NavLink>
      </div>
    </div>
  );
}
