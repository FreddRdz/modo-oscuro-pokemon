import React, { useContext } from "react";
import "../styles/footer.css";
import { DarkMode } from "../context/DarkModeContext";

export const Footer = () => {
  const { darkMode } = useContext(DarkMode);

  return (
    <footer className={darkMode ? "footer--BgColorDark" : "footer"}>
      <div className='footer-contenedor'>
        <p
          className={
            darkMode
              ? "footer-contenedor--leyenda"
              : "footer-contenedor--leyenda"
          }
        >
          PokeDex 2022 - Todos los derechos reservados™
        </p>
      </div>
    </footer>
  );
};
