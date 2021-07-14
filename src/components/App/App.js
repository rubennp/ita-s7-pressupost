import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

// pàgines
import Benvinguda from '../pages/Benvinguda';
import Pressupost from '../pages/Pressupost';

// Styled components
import { GlobalStyle } from '../GlobalStyle';
import { Menu } from './App.styled';

const App = () => 
    <div className="App">
      <GlobalStyle />
      <Router>
        <Menu>
          <ul>
            <li>
              <NavLink to="/" exact>Benvinguda</NavLink>
            </li>
            <li>
              <NavLink to="/pressupost">Pressupost</NavLink>
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
      </Router>
    </div>
;

export default App;