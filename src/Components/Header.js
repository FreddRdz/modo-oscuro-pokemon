import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import pokebola from "../assets/pokebola_logo_light-mode.png";
import { DarkMode } from "../context/DarkModeContext";
import "../styles/header.css";

export const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const [text, setText] = useState("Cambiar a modo oscuro");

  const handleOnClickDarkMode = () => {
    setDarkMode(!darkMode);

    darkMode
      ? setText("Cambiar a modo oscuro")
      : setText("Cambiar a modo claro");
  };

  return (
    <header className={darkMode ? "header--BgColorDark" : "header"}>
      <div className='header-container'>
        <img className='header-container--logo' src={pokebola} />
        <nav className='header-container--navbar'>
          <button
            className={darkMode ? "button--BgColorDark" : "navbar--button"}
            onClick={handleOnClickDarkMode}
          >
            {text}
          </button>
          <ul>
            <li>
              <Link className='navbar--link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='navbar--link' to='/pokedex'>
                PokeDex
              </Link>
            </li>
            <li>
              <Link className='navbar--link' to='/contacto'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
