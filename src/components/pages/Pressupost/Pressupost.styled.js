import styled from 'styled-components';

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
