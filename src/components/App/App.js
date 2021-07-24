import { useRef } from 'react';

import { 
  Switch,
  Route,
  NavLink,
  useLocation
} from 'react-router-dom';

// pàgines
import Benvinguda from '../pages/Benvinguda';
import Pressupost from '../pages/Pressupost';

// Styled components
import { GlobalStyle } from '../GlobalStyle';
import { Menu } from './App.styled';       

const App = () => {
  const loc = useRef(useLocation());
  const UseQuery = () => new URLSearchParams(useLocation().search);
  let query = UseQuery();

  if (!query.get('shared')) {
    const actiuOnStorage = JSON.parse(localStorage.getItem('pressupostActiu'));
    if (!actiuOnStorage) loc.current = '/pressupost';
    else loc.current = `/pressupost?id=${actiuOnStorage.id}&data=${actiuOnStorage.data}&nom=${actiuOnStorage.nom}&client=${actiuOnStorage.client}&web=${actiuOnStorage.web}${(actiuOnStorage) ? `&nPags=${actiuOnStorage.nPags}&nIdiomes=${actiuOnStorage.nIdiomes}` : ``}&seo=${actiuOnStorage.seo}&ads=${actiuOnStorage.ads}`;
  }
 
  return (
    <div className="App">
      <GlobalStyle />
      <Menu>
        <ul>
          <li>
            <NavLink to="/" exact>Benvinguda</NavLink>
          </li>
          <li>
            <NavLink to={loc.current}>Pressupost</NavLink>
          </li>
        </ul>
      </Menu>
    
      <Switch>
        <Route exact path="/">
          <Benvinguda />
        </Route>
        <Route path="/pressupost">
          <Pressupost />
        </Route>
      </Switch>
  </div>
  );
};

export default App;