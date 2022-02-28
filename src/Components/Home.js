import React, { useContext } from "react";
import pokedex from "../assets/pokedex.png";
import { DarkMode } from "../context/DarkModeContext";

export const Home = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <div className={darkMode ? "main-bgColorDark" : "main-container"}>
      <h1 className={darkMode ? "main-titulo-bgColorDark" : ""}>
        Bienvenido a la PokeDex
      </h1>
      <h2 className={darkMode ? "main-subtitulo-bgColorDark" : ""}>
        Busca tus pokemones favoritos
      </h2>
      <img src={pokedex} />
    </div>
  );
};
