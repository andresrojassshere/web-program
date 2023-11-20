import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext";
import { CharacterList } from "../../components/CharacterList";
import { Filters } from "../../components/Filters";
import { useNavigate } from "react-router-dom";

export function MultiversePage() {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(CharacterContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <div className="justify-center h-10 bg-[#40B5CB] mb-0  p-20">
        <form className="text-center" onSubmit={onSearchSubmit}>
          <div>
            <div className="pt-5">
              <input
                type="search"
                name="valueSearch"
                id=""
                value={valueSearch}
                onChange={onInputChange}
                placeholder="Search character"
                className="inline-block align-middle py-2 px-4 rounded border border-gray-300"
              />
              <button className="btn-search ml-2 bg-white hover:bg-[#c0df40] text-gray-700 font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container-filter container">
        <div className="icon-filter" onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filtrar</span>
        </div>
      </div>
      <CharacterList />
      <Filters />
      <Outlet />
    </>
  );
}
