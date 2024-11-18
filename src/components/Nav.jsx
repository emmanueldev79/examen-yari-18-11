export const Nav = ({ onFilterChange }) => {
  const handleInputChange = (e) =>
    onFilterChange({ type: "search", value: e.target.value });

  const handleSelectChange = (type, value) => onFilterChange({ type, value });

  return (
    <header className="nav">
      <h1 className="logo">Rick & Morty</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="search-input"
          onChange={handleInputChange}
        />
        <select
          onChange={(e) => handleSelectChange("status", e.target.value)}
          className="filter"
        >
          <option value="">Estado</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select
          onChange={(e) => handleSelectChange("gender", e.target.value)}
          className="filter"
        >
          <option value="">Género</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
        </select>
        <select
          onChange={(e) => handleSelectChange("species", e.target.value)}
          className="filter"
        >
          <option value="">Especie</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
    </header>
  );
};
