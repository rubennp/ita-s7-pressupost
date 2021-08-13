import { useState, useEffect } from "react";
import { Redirect } from 'react-router';

// styled components
import { Formulari, Btn, Main, Lateral, PressupostActiu } from './Pressupost.styled';

// components
import Panell from './Panell';
import PressupostosGuardats from "./PressupostosGuardats";

const Pressupost = ({shared}) => {
  const hrefOrigin = window.location.origin;

  const nouPressupost = (user) => {
    return (
      {
        id: (Date.parse(new Date())+Math.random()).toString().replace('.', ''),
        data: new Date().toLocaleString('ca'),
        user: user,
        nom: "",
        client: "",
        web: false, 
        nPags: 0, 
        nIdiomes: 0, 
        seo: false, 
        ads: false,
      }
    );
  };
  
  // State
  const [userLoggedIn, setUserLoggedIn] = useState('guest');
  const [pressupostActiu, setPressupostActiu] = useState(nouPressupost(userLoggedIn));
  const [link, setLink] = useState(`/pressupost?nom=${pressupostActiu.nom}&client=${pressupostActiu.client}&web=${pressupostActiu.web}${(pressupostActiu) ? `&nPags=${pressupostActiu.nPags}&nIdiomes=${pressupostActiu.nIdiomes}` : ``}&seo=${pressupostActiu.seo}&ads=${pressupostActiu.ads}&id=${pressupostActiu.id}&data=${pressupostActiu.data}`);
  const [shareLink, setShareLink] = useState(`${hrefOrigin}${link}&shared=true`);
  const [total, setTotal] = useState(0);
  const [pressupostos, setPressupostos] = useState([]);

  // chPags(): (de Panell) set número de pàgines al pressupost actiu
  const chPags = (pags) => setPressupostActiu({...pressupostActiu, nPags: pags});

  // chIdiomes(): (de Panell) set número d'idiomes al pressupost actiu
  const chIdiomes = (idiomes) => setPressupostActiu({...pressupostActiu, nIdiomes: idiomes});

  // guardaPressupost(): event botó "Guardar"
  const guardaPressupost = () => {
    let index = pressupostos.findIndex(el => el.id === pressupostActiu.id);
    if (index === -1)
      setPressupostos([...pressupostos, {...pressupostActiu, total}]);
    else {
      // Para mi, para tener en cuenta:      
      // https://stackoverflow.com/questions/58106664/react-usestate-hook-not-triggering-re-render-of-child-component
      let prev = [...pressupostos];
      prev.splice(index, 1, {...pressupostActiu, total});
      setPressupostos(prev);
    }
  };

  // handleNouPressupost(): event botó "Nou"
  const handleNouPressupost = () => setPressupostActiu(nouPressupost(userLoggedIn));

  // rescata info de pressupost guardat
  const rescataPressupostGuardat = (id) => setPressupostActiu(pressupostos[pressupostos.findIndex(el => el.id === id)]);

  // esborra pressupost guardat
  const esborraPressupostGuardat = (id) => {
    setPressupostos(prev => prev.filter(el => el.id !== id));
    if (pressupostActiu.id === id) handleNouPressupost();
  };

  // comparteix la URL del pressupost
  const comparteixURL = () => {
    navigator.permissions.query({name: 'clipboard-write'}).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText(shareLink).then(() => {
          alert(`Comparteix el link copiat al porta-retalls.`);
        }, () => {
          alert("No s'ha pogut copiar el link! Has de donar permisos al navegador.");
        });
      }
    });
  };

  /* 
   * EFFECTS 
   */

  // init(): comprova si és un link compartit o agafa dades del pressupostActiu de localStorage, si existeix (només en inicialitzar).
  useEffect(function init() {
    if (shared) {
      setPressupostActiu({
        id: shared.get('id'),
        user: 'shared',
        data: shared.get('data'),
        nom: shared.get('nom'),
        client: shared.get('client'),
        web: JSON.parse(shared.get('web')),
        nPags: JSON.parse(shared.get('nPags')) || 0,
        nIdiomes: JSON.parse(shared.get('nIdiomes')) || 0,
        seo: JSON.parse(shared.get('seo')),
        ads: JSON.parse(shared.get('ads'))
      });
    }
    else {
      setUserLoggedIn('guest');

      const actiuOnStorage = JSON.parse(localStorage.getItem('pressupostActiu'));
      if (!actiuOnStorage) localStorage.setItem('pressupostActiu', JSON.stringify(pressupostActiu));
      else setPressupostActiu(actiuOnStorage);

      const pressupostosOnStorage = JSON.parse(localStorage.getItem('pressupostos'));
      if (!pressupostosOnStorage) localStorage.setItem('pressupostos', JSON.stringify(pressupostos));
      else setPressupostos(pressupostosOnStorage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // calculaTotal(): amb canvis a pressupostActiu, calcula total, guarda i guarda a localStorage el pressupost actiu
  useEffect(function calculaTotal() {
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
    setLink(`/pressupost?nom=${pressupostActiu.nom}&client=${pressupostActiu.client}&web=${pressupostActiu.web}${(pressupostActiu) ? `&nPags=${pressupostActiu.nPags}&nIdiomes=${pressupostActiu.nIdiomes}` : ``}&seo=${pressupostActiu.seo}&ads=${pressupostActiu.ads}&id=${pressupostActiu.id}&data=${pressupostActiu.data}`);
    
    localStorage.setItem('pressupostActiu', JSON.stringify(pressupostActiu));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pressupostActiu]);

  // si canvia link, canvia shared link
  useEffect(function changeShareLink() {
    setShareLink(`${hrefOrigin}${link}&shared=true`);
  }, [hrefOrigin,link]);

  // savePressupostosOnLocaleStorage(): quan canvia pressupostos, guarda a localeStorage, tb.
  useEffect(function savePressupostosOnLocaleStorage() {
    localStorage.setItem('pressupostos', JSON.stringify(pressupostos));
  }, [pressupostos]);

  return (
    <Main>
      <PressupostActiu>
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
          <Btn type="button" onClick={handleNouPressupost}>Nou</Btn>
          <Btn type="button" onClick={comparteixURL}>Comparteix!</Btn>
        </Formulari>
        <h2>Total: {total}€</h2>
      </PressupostActiu>
      <Lateral>
        <PressupostosGuardats actiu={pressupostActiu.id} p={pressupostos} handleRescata={rescataPressupostGuardat} handleEsborra={esborraPressupostGuardat} />
      </Lateral>
      <Redirect to={link} />
    </Main>
  );
};

export default Pressupost;