// styled components
import { Div, Btn } from './Panell.styled';

const Panell = ({p, chPags, chIdiomes}) => {
    const inPags = document.getElementById("nPags");
    const inIdiomes = document.getElementById("nIdiomes");

    return (
        <Div>
            <p>
                <label>Número de pàgines: </label>
                <Btn type="button" onClick={() => {
                    inPags.value = p.nPags + 1;
                    chPags(parseInt(inPags.value));
                }}>+</Btn>
                <input id="nPags" type="number" min="1" value={p.nPags} onChange={(e) => chPags(parseInt(e.target.value))} />
                <Btn type="button" onClick={() => {
                    if (inPags.value > 1) {
                        inPags.value = p.nPags - 1;
                        chPags(parseInt(inPags.value));
                    }
                }}>-</Btn>
            </p>
            <p>
                <label>Número d'idiomes: </label>
                <Btn type="button" onClick={() => {
                    inIdiomes.value = p.nIdiomes + 1;
                    chIdiomes(parseInt(inIdiomes.value));
                }}>+</Btn>
                <input id="nIdiomes" type="number" min="1" value={p.nIdiomes} onChange={(e) => chIdiomes(parseInt(e.target.value))} />
                <Btn type="button" onClick={() => {
                    if (inIdiomes.value > 1) {
                        inIdiomes.value = p.nIdiomes - 1;
                        chIdiomes(parseInt(inIdiomes.value));
                    }
                }}>-</Btn>
            </p>
        </Div>
    );
};

export default Panell;