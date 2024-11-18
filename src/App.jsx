import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { ContainerCard } from "./components/ContainerCard";

function App() {
  const [filter, setFilter] = useState({
    search: "",
    status: "",
    gender: "",
    species: "",
  });

  const handleFilterChange = ({ type, value }) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [type]: value,
    }));
  };

  return (
    <div className="app">
      <Nav onFilterChange={handleFilterChange} />
      <ContainerCard filter={filter} />
    </div>
  );
}

export default App;
