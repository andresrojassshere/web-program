import { useEffect } from "react";
import { CharacterContext } from "./CharacterContext";
import { useState } from "react";
import { useForm } from "../hook/useForm";

export const CharacterProvider = ({ children }) => {
  const [someCharacters, setSomeCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const getCharacters = async (limit = 0) => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const res = await fetch(
      `${baseURL}character?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (character) => {
      const res = await fetch(character.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setSomeCharacters([...someCharacters, ...results]);
    setLoading(false);
  };

  const getAllCharacters = async () => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const res = await fetch(`${baseURL}character?limit=1000&offset=0}`);
    const data = await res.json();

    const promises = data.results.map(async (character) => {
      const res = await fetch(character.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setAllCharacters(results);
    setLoading(false);
  };

  const getCharacterById = async (id) => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const res = await fetch(`${baseURL}character/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        someCharacters,
        allCharacters,
        getCharacterById,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
