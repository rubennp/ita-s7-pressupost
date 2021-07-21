import { useEffect, useState } from 'react';

// styled components
import { Llistat, Ordena, Cerca, SeccioGuardats } from './PressupostosGuardats.styled';

const PressupostosGuardats = ({actiu, p, handleRescata, handleEsborra }) => {
  const NOM = 0, DATA = 1, INIT = 2, CLIENT = 1;
  const orderBy = ["nom", "data"];
  const cercaBy = ["nom", "client"];

  const [llistat, setLlistat] = useState(p);
  const [activeOrder, setActiveOrder] = useState(INIT);
  const [activeCerca, setActiveCerca] = useState(NOM);
  const [cerca, setCerca] = useState('');

  useEffect(() => {
    let prev = [...p];
    
    // hi ha cerca?
    if (cerca !== '') prev = prev.filter(el => el[cercaBy[activeCerca]].toLowerCase().includes(cerca));

    // ordena?
    if (activeOrder !== INIT) prev.sort((a, b) => (a[orderBy[activeOrder]] === b[orderBy[activeOrder]]) ? 0 : (a[orderBy[activeOrder]] > b[orderBy[activeOrder]]) ? 1 : -1);
    setLlistat(prev);

    document.querySelectorAll('button.active').forEach(el => el.classList.remove("active"));

    let buttons = document.querySelectorAll('ul.botonsOrdena button');
    buttons[activeOrder].classList = "active";

    buttons = document.querySelectorAll('ul.botonsCerca button');
    buttons[activeCerca].classList = "active";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cerca, activeCerca, activeOrder, p]);


  return (
      <SeccioGuardats>
        <h4>Pressupostos guardats</h4>
        <Ordena className="botonsOrdena">
          <li>Ordenat per <button type="button" onClick={() => setActiveOrder(NOM)}>NOM</button></li>
          <li><button type="button" active="false" onClick={() => setActiveOrder(DATA)}>DATA</button></li>
          <li><button className="active" type="button" onClick={() => setActiveOrder(INIT)}>INIT</button></li>
        </Ordena>
        <div className="cerca">
          <label>
            Cerca:
            <input type="text" onChange={e => setCerca(e.target.value.toLowerCase())}/>
            <Cerca className="botonsCerca">
              <li><button type="button" className="active" onClick={() => setActiveCerca(NOM)}>NOM</button></li>
              <li><button type="button" onClick={() => setActiveCerca(CLIENT)}>CLIENT</button></li>
            </Cerca>
          </label>
        </div>
        <Llistat>
          {llistat.map((p) => {
            return (
              <li key={p.id}>
                <div className="pressupostGuardat">
                  <div>
                    <span className={p.id === actiu ? "pressupostNom actiu" : "pressupostActiu"}>{p.nom}</span>
                    <span className="pressupostClient">{p.client}</span>
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
      </SeccioGuardats>
  );
};

export default PressupostosGuardats;