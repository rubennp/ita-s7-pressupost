import { useEffect, useState } from 'react';

// styled components
import { Llistat, Ordena } from './PressupostosGuardats.styled';

const PressupostosGuardats = ({actiu, p, handleRescata, handleEsborra }) => {
  const NOM = 0, DATA = 1, INIT = 2;
  const by = ["nom", "data"];

  const [llistat, setLlistat] = useState(p);
  const [activeOrder, setActiveOrder] = useState(INIT);

  useEffect(() => {
    let prev = [...p];
    if (activeOrder !== INIT) prev.sort((a, b) => (a[by[activeOrder]] === b[by[activeOrder]]) ? 0 : (a[by[activeOrder]] > b[by[activeOrder]]) ? 1 : -1);
    setLlistat(prev);

    document.querySelector('button.active').classList.remove("active");
    const buttons = document.querySelectorAll('ul.botonsOrdena button');
    buttons[activeOrder].classList = "active";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOrder, p]);

  return (
      <div>
        <h4>Pressupostos guardats</h4>
        <Ordena className="botonsOrdena">
          <li>Ordenat per <button type="button" onClick={() => setActiveOrder(NOM)}>NOM</button></li>
          <li><button type="button" active="false" onClick={() => setActiveOrder(DATA)}>DATA</button></li>
          <li><button className="active" type="button" onClick={() => setActiveOrder(INIT)}>INIT</button></li>
        </Ordena>
        <Llistat>
          {llistat.map((p) => {
            return (
              <li key={p.id}>
                <div className="pressupostGuardat">
                  <div>
                    <span className={p.id === actiu ? "pressupostNom actiu" : "pressupostActiu"}>{p.nom}</span>
                    <span className="pressupostData">{p.data}</span>
                  </div>
                  <div className="actions">
                      <img src="./img/magnifier.png" alt="icona lupa" onClick={() => handleRescata(p.id)} />
                      <img src="./img/delete.png" alt="icona paperera" onClick={() => handleEsborra(p.id)} />
                  </div>
                </div>
              </li>
            );
          })}
        </Llistat>
      </div>
  );
};

export default PressupostosGuardats;