import React, { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";

export function Filters() {
  const { active } = useContext(CharacterContext);

  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div>
        <span>Tipo</span>

        <div>
          <input type="alive" name="alive" id="alive" />
          <label htmlFor="alive">Alive</label>
        </div>
        <div>
          <input type="dead" name="dead" id="dead" />
          <label htmlFor="dead">Dead</label>
        </div>
        <div>
          <input type="unkown" name="unkown" id="unkown" />
          <label htmlFor="unkown">Unkown</label>
        </div>
      </div>
    </div>
  );
}
