import { useState, useEffect } from "react";
import { Card } from "./Card";

export const ContainerCard = ({ filter }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) throw new Error("No se pudieron cargar los datos");
        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredCharacters = characters.filter((character) => {
    const searchTerm = filter.search.toLowerCase();
    const matchesSearch = character.name.toLowerCase().includes(searchTerm);
    const matchesStatus = !filter.status || character.status === filter.status;
    const matchesGender = !filter.gender || character.gender === filter.gender;
    const matchesSpecies =
      !filter.species || character.species === filter.species;

    return matchesSearch && matchesStatus && matchesGender && matchesSpecies;
  });

  if (loading) return <div className="spinner"></div>;
  if (error) return <div className="error">{error}</div>;
  if (filteredCharacters.length === 0)
    return <div className="no-results">No se encontraron resultados.</div>;

  return (
    <div className="cards">
      {filteredCharacters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
