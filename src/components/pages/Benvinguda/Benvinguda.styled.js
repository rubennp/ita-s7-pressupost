import styled from 'styled-components';

export const Main = styled.main`
    padding: 10%;

    h1, h2, h3 {
        text-align: center;
    }

    h1 { 
        padding: 5px 10px;
        font-size: 2.5em;
        border-bottom: 15px ridge rgba(247, 103, 7, 0.5);
        line-height: 15px;
    }

    h2 { margin-bottom: 5px; }

    h3 {
        color: rgba(0, 0, 0, 0.5);
        margin-top: 0;
    }

    p {
        color: rgba(0, 0, 0, 0.65);
        font-family: Merriweather, serif;
        text-align: justify;
    }
`;