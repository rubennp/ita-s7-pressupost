const PressupostosGuardats = ({p, handleClick }) => {

  return (
      <div>
        <h4>Pressupostos guardats</h4>
        <ul>
          {p.map((p) => {
            return (
              <li key={p.id} onClick={() => handleClick(p.id)}>
                <div className="pressupostGuardat">
                  <span className="pressupostNom">{p.nom}</span>
                  <span className="pressupostData">{p.data}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default PressupostosGuardats;