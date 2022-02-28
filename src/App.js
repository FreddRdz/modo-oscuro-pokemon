import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Contacto } from "./Components/Contacto";
import { PokeDex } from "./Components/PokeDex";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/DarkModeContext";
import "./styles/main.css";

const App = () => {
  return (
    <DarkModeContext>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='/pokedex' element={<PokeDex />}></Route>
        </Routes>
      </main>
      <Footer />
    </DarkModeContext>
  );
};

export default App;
