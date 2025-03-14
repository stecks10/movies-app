import { useState } from "react";
import { Search } from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("I am Batmam");

  return (
    <div className="pattern">
      <h1 class="wrapper">
        <header>
          <img src="./hero.png" alt="hero png" />
          Encontre <span className="text-gradient">Filmes</span> que você vai
          gostar sem problemas Pesquisar
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </h1>
    </div>
  );
};

export default App;
