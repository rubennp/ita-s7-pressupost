import { useState, useEffect } from "react";

// styled components
import { Formulari, Btn } from './Pressupost.styled';

// components
import Panell from './Panell';

const Pressupost = () => {
    const [userLoggedIn, setUserLoggedIn] = useState('guest');
    const [pressupostActiu, setPressupostActiu] = useState(
      {
        id: (Date.parse(new Date())+Math.random()).toString().replace('.', ''),
        data: new Date().toLocaleString(),
        user: userLoggedIn,
        nom: "",
        client: "",
        web: false, 
        nPags: 0, 
        nIdiomes: 0, 
        seo: false, 
        ads: false
      });
    const [total, setTotal] = useState(0);
    const [pressupostos, setPressupostos] = useState([]);
  
    const chPags = (pags) => setPressupostActiu({...pressupostActiu, nPags: pags});
    const chIdiomes = (idiomes) => setPressupostActiu({...pressupostActiu, nIdiomes: idiomes});
    const guardaPressupost = () => setPressupostos(prev => prev.splice(prev.findIndex(el => el.id === pressupostActiu.id), 1, pressupostActiu));
  
    // agafa dades del pressupostActiu de localStorage, si existeix, només en inicialitzar
    useEffect(function init() {
      setUserLoggedIn('guest');
      const actiuOnStorage = JSON.parse(localStorage.getItem('pressupostActiu'));
      if (!actiuOnStorage) localStorage.setItem('pressupostActiu', JSON.stringify(pressupostActiu));
      else setPressupostActiu(actiuOnStorage);

      const pressupostosOnStorage = JSON.parse(localStorage.getItem('pressupostos'));
      if (!pressupostosOnStorage) localStorage.setItem('pressupostos', JSON.stringify(pressupostos));
      else setPressupostos(pressupostosOnStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(function calculaTotal() {
      // calcula pressupostActiu: 
      let total = 0;
  
      if (pressupostActiu.web) {
        total += 500;
        if (pressupostActiu.nPags > 1 || pressupostActiu.nIdiomes > 1) {
          total += pressupostActiu.nPags * pressupostActiu.nIdiomes * 30;
        }
      }
      if (pressupostActiu.seo) total += 300;
      if (pressupostActiu.ads) total += 200;
  
      setTotal(total);
      // guarda pressupostActiu a localStorage
      localStorage.setItem('pressupostActiu', JSON.stringify(pressupostActiu));
    },[pressupostActiu]);

    useEffect(function savePressupostosOnLocaleStorage() {
      localStorage.setItem('pressupostos', JSON.stringify(pressupostos));
    }, [pressupostos]);

    // TODO: ara mateix si només es canvien els inputs de text, s'ha de clicar 2 vegades "Guardar"
    //       pq s'actualitzi pressupostos. Si es canvia qualsevol altra opció (a més a més o no dels
    //       textos) amb només un clic n'hi ha prou ¿¿¿???
  
    return (
      <main>
        <h1>Que vols fer?</h1>
        <Formulari>
          <p>
            <label>Nom del pressupost: 
              <input 
                id="nom"
                value={pressupostActiu.nom} 
                type="text" 
                onChange={e => setPressupostActiu({...pressupostActiu, nom: e.target.value})} 
              />
            </label>
          </p>
          <p>
            <label>Client: 
              <input
                id="client" 
                value={pressupostActiu.client} 
                type="text" 
                onChange={e => setPressupostActiu({...pressupostActiu, client: e.target.value})} 
              />
            </label>
          </p>
          <hr />
          <p>
            <label>
              <input 
                checked={pressupostActiu.web} 
                type="checkbox" 
                onChange={e => {
                  const num = pressupostActiu.web ? 0 : 1;
                  setPressupostActiu({...pressupostActiu, web: e.target.checked, nPags: num, nIdiomes: num})
                }} 
              />Una pàgina web (500€)
            </label>
          </p>
          { pressupostActiu.web && <Panell p={pressupostActiu} chPags={chPags} chIdiomes={chIdiomes}/> }
          <p>
            <label>
              <input 
                checked={pressupostActiu.seo} 
                type="checkbox" 
                onChange={e => setPressupostActiu({...pressupostActiu, seo: e.target.checked})} 
              />Una consultoría SEO (300€)
            </label>
          </p>
          <p>
            <label>
              <input 
                checked={pressupostActiu.ads} 
                type="checkbox" 
                onChange={e => setPressupostActiu({...pressupostActiu, ads: e.target.checked})}
              />Una campanya de Google Ads (200€)
            </label>
          </p>
          <Btn type="button" onClick={guardaPressupost}>Guarda</Btn>
          {/* <button type="button">Nou</button> */}
        </Formulari>
        <h2>Total: {total}€</h2>
      </main>
    );
  };

  export default Pressupost;