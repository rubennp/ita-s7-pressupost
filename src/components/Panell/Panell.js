import { Div } from './Panell.styled';

const Panell = ({p, chPags, chIdiomes}) => 
    <Div>
        <p>
            <label>Número de pàgines: </label>
            <input type="number" min="1" value={p.nPags} onChange={(e) => chPags(e.target.value)} />
        </p>
        <p>
            <label>Número d'idiomes: </label>
            <input type="number" min="1" value={p.nIdiomes} onChange={(e) => chIdiomes(e.target.value)} />
        </p>
    </Div>;

export default Panell;