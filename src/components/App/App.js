import React, { useEffect, useState } from 'react';

// Styled components
import { GlobalStyle } from '../GlobalStyle';

function App() {
  const [pressupost, setPressupost] = useState({web: false, seo: false, ads: false});
  const [total, setTotal] = useState(0);

  const CalcPressupost = () => {
    let total = 0;

    if (pressupost.web) total += 500;
    if (pressupost.seo) total += 300;
    if (pressupost.ads) total += 200;

    setTotal(total);
  };

  useEffect(CalcPressupost,[pressupost]);

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Que vols fer?</h1>
      <form>
        <p><label><input type="checkbox" onChange={(e) => setPressupost({...pressupost, web: e.target.checked}) } />Una pàgina web (500€)</label></p>
        <p><label><input type="checkbox" onChange={(e) => setPressupost({...pressupost, seo: e.target.checked}) } />Una consultoría SEO (300€)</label></p>
        <p><label><input type="checkbox" onChange={(e) => setPressupost({...pressupost, ads: e.target.checked}) } />Una campanya de Google Ads (200€)</label></p>
      </form>
      <h2>Total: {total}€</h2>
    </div>
  );
}

export default App;