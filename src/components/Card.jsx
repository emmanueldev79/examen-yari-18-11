export const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-info">Especie: {character.species}</p>
        <p className={`card-status ${character.status.toLowerCase()}`}>
          Estado: {character.status}
        </p>
      </div>
    </div>
  );
};
