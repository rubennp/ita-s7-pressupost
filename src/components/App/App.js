import React, { useEffect, useState } from 'react';

// components
import Panell from '../Panell';

// Styled components
import { GlobalStyle } from '../GlobalStyle';
import { Pressupost } from './App.styled';

function App() {
  const [pressupost, setPressupost] = useState(
    { 
      web: false, 
      nPags: 0, 
      nIdiomes: 0, 
      seo: false, 
      ads: false
    });
  const [total, setTotal] = useState(0);

  const CalcPressupost = () => {
    let total = 0;

    if (pressupost.web) {
      total += 500;
      if (pressupost.nPags > 1 || pressupost.nIdiomes > 1) 
        total += pressupost.nPags * pressupost.nIdiomes * 30;
    }
    if (pressupost.seo) total += 300;
    if (pressupost.ads) total += 200;

    setTotal(total);
  };

  const chPags = (pags) => setPressupost({...pressupost, nPags: pags});
  const chIdiomes = (idiomes) => setPressupost({...pressupost, nIdiomes: idiomes});

  useEffect(CalcPressupost,[pressupost]);

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Que vols fer?</h1>
      <Pressupost>
        <p><label><input type="checkbox" onChange={(e) => setPressupost({...pressupost, web: e.target.checked, nPags: 1, nIdiomes: 1}) } />Una pàgina web (500€)</label></p>
        { pressupost.web && <Panell p={pressupost} chPags={chPags} chIdiomes={chIdiomes}/> }
        <p><label><input type="checkbox" onChange={(e) => setPressupost({...pressupost, seo: e.target.checked}) } />Una consultoría SEO (300€)</label></p>
        <p><label><input type="checkbox" onChange={(e) => setPressupost({...pressupost, ads: e.target.checked}) } />Una campanya de Google Ads (200€)</label></p>
      </Pressupost>
      <h2>Total: {total}€</h2>
    </div>
  );
}

export default App;