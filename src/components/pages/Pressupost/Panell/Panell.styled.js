import styled from 'styled-components';

export const Div = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .05);
    
    // comentat pq funcioni posicionament fixed amb el viewport del background de modal
    // (https://www.darrenlester.com/blog/why-fixed-position-element-not-relative-to-viewport)

	// animation: entrada 0.5s 0s ease-in-out both;

    // @keyframes entrada {
    //     0% {
    //         transform: scale(0);
    //         transform-origin: 0% 0%;
    //     }
    //     100% {
    //         transform: scale(1);
    //         transform-origin: 0% 0%;
    //     }
    // }

    input { margin: 0 5px; }

    .infoButton {
        margin-left: 15px;
        appearance: unset;
        border: unset;
        background: url('./img/info.png') no-repeat center center;
        background-size: contain;
        width: 20px;
        height: 20px;

        &:hover { 
            cursor: pointer; 
            transform: rotate(30deg);
            filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .5));
        }
    }

    & > div:first-of-type { margin-bottom: 20px; }

    & > div {
        display: flex;
        justify-content: flex-end;
        align-items: baseline;

        label { margin-right: 20px;}
    }    
`;

export const Btn = styled.button`
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: rgba(247, 103, 7, 0.75);
    color: white;
    font-weight: bold;
    font-size: 1.1em;

    &:hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
`;