import { useState } from 'react';

// styled components
import { Div, Btn } from './Panell.styled';

import Info from './Info';

const Panell = ({p, chPags, chIdiomes}) => {
    const [infoPags, setInfoPags] = useState(false);
    const [infoIdms, setInfoIdms] = useState(false);

    const inPags = document.getElementById("nPags");
    const inIdiomes = document.getElementById("nIdiomes");

    const handleInfoPags = () => setInfoPags(!infoPags);
    const handleInfoIdms = () => setInfoIdms(!infoIdms);
    

    return (
        <Div>
            <div>
                <div>
                    <label>Número de pàgines</label>
                </div>
                <div>
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
                </div>
                <div>
                    <button className="infoButton" type="button" onClick={handleInfoPags}></button>
                    {infoPags && <Info close={handleInfoPags} text={`${p.nPags} ${(p.nPags === 1) ? "pàgina" : "pàgines"}`}></Info>}
                </div>
            </div>
            <div>
                <div>
                    <label>Número d'idiomes</label>
                </div>
                <div>
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
                </div>
                <div>
                    <button className="infoButton" type="button" onClick={handleInfoIdms}></button>
                    {infoIdms && <Info close={handleInfoIdms} text={`${p.nIdiomes} ${(p.nIdiomes === 1) ? "idioma" : "idiomes"}`}></Info>}
                </div>
            </div>
        </Div>
    );
};

export default Panell;