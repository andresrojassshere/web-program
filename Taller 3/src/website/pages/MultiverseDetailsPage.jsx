import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../../components/Loader";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export const MultiverseDetailsPage = () => {
  const { getCharacterById } = useContext(CharacterContext);

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  const fetchCharacter = async (id) => {
    const data = await getCharacterById(id);
    setCharacter(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <h1>#{character.id}</h1>
            <img src={character.image} alt={character.name} />
            <div>
              <div>
                <p>Name:</p>
                <h1>{character.name}</h1>
              </div>
              <div>
                <p>Status:</p>
                <h1>{character.status}</h1>
              </div>
            </div>
          </div>
          <div>
            <NavLink to="/multiverse">
              <Button className="hover:bg-[#c0df40]">Go back</Button>
            </NavLink>
          </div>
        </>
      )}
    </main>
  );
};
