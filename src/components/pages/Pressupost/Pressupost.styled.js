import styled from 'styled-components';

export const Main = styled.main`
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 2fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 5px; 
    grid-template-areas: 
    "pressupost-actiu pressupostos-guardats";
    
    h1, h2, h4 { text-align: center }

    h4 { margin-bottom: 0.5em; }

    h2 { margin-bottom: 0; }
`;

export const PressupostActiu = styled.div`
    grid-area: pressupost-actiu;
    padding: 0 10%;
`;

export const Lateral = styled.aside`
    align-content: start;
    grid-area: pressupostos-guardats;
    width: 90%;
    height: 100%;
    margin: 10px;
    box-shadow: 2px 2px 10px rgba(100, 100, 100, .5);
    background-color: rgba(100, 100, 100, .1);
`;

export const Formulari = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

    & > * { margin: 5px; }

    input[type="text"] {
        padding: 5px;
        width: 98%;
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.75);
        border: none;
        font-size: 0.9em;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        &:focus {
            outline: none;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); 
        }
    }

    hr {
        width: 100%;
        margin: 20px 0;
        border-width: .1em;
        border-color: rgba(0, 0, 0, .1);
        border-style: solid;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);    
    }
`;

export const Btn = styled.button`
    margin-top: 20px;
    padding: 5px 10px;
    background-color: #FFC078;
    color: #F76707;
    font-size: 1.2em;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    
    &:hover {
        background-color: #F76707;
        color: white;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;
