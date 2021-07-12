import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// components
import Panell from '../Panell';

// Styled components
import { GlobalStyle } from '../GlobalStyle';
import { Pressupost } from './App.styled';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pressupost">Pressupost</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pressupost">
            <PagPressupost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const PagPressupost = () => {
  const [pressupost, setPressupost] = useState(
    { 
      web: false, 
      nPags: 0, 
      nIdiomes: 0, 
      seo: false, 
      ads: false
    });
  const [total, setTotal] = useState(0);

  const chPags = (pags) => setPressupost({...pressupost, nPags: pags});
  const chIdiomes = (idiomes) => setPressupost({...pressupost, nIdiomes: idiomes});

  // agafa dades del pressupost de localStorage, si existeixen, només en inicialitzar
  useEffect(() => {
    const onStorage = JSON.parse(localStorage.getItem('pressupost'));

    if (!onStorage) {
      localStorage.setItem('pressupost', JSON.stringify(pressupost));
    } else {
      setPressupost(onStorage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // calcula pressupost: 
    let total = 0;

    if (pressupost.web) {
      total += 500;
      if (pressupost.nPags > 1 || pressupost.nIdiomes > 1) {
        total += pressupost.nPags * pressupost.nIdiomes * 30;
      }
    }
    if (pressupost.seo) total += 300;
    if (pressupost.ads) total += 200;

    setTotal(total);

    // guarda pressupost a localStorage
    localStorage.setItem('pressupost', JSON.stringify(pressupost));
  },[pressupost]);

  return (
    <div>
      <h1>Que vols fer?</h1>
      <Pressupost>
        <p><label><input checked={pressupost.web} type="checkbox" onChange={(e) => setPressupost({...pressupost, web: e.target.checked, nPags: 1, nIdiomes: 1}) } />Una pàgina web (500€)</label></p>
        { pressupost.web && <Panell p={pressupost} chPags={chPags} chIdiomes={chIdiomes}/> }
        <p><label><input checked={pressupost.seo} type="checkbox" onChange={(e) => setPressupost({...pressupost, seo: e.target.checked}) } />Una consultoría SEO (300€)</label></p>
        <p><label><input checked={pressupost.ads} type="checkbox" onChange={(e) => setPressupost({...pressupost, ads: e.target.checked}) } />Una campanya de Google Ads (200€)</label></p>
      </Pressupost>
      <h2>Total: {total}€</h2>
    </div>
  );
};

export default App;