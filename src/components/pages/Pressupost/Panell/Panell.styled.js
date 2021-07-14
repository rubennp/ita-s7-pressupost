import styled from 'styled-components';

export const Div = styled.div`
    margin: 20px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;
    
	animation: entrada 0.5s 0s ease-in-out both;

    @keyframes entrada {
        0% {
            transform: scale(0);
            transform-origin: 0% 0%;
        }
        100% {
            transform: scale(1);
            transform-origin: 0% 0%;
        }
    }

    input { margin 0 10px;}
`;

export const Btn = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: orange;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
`;