import styled from 'styled-components';

export const Modal = styled.div`
    &.modal {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        overflow: hidden;
        background-color: rgba(0, 0, 0, .5);
        text-align: center;
        backdrop-filter: blur(5px);

        &:hover { cursor: crosshair; }

        .container {
            flex-direction: column;
            justify-content: center;
            align-content: center;
            flex-basis: 50%;
            padding: 1rem 0;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
        }
    
        .content {
            padding: 20px 0;

            h3 { color: rgba(0,0,0,0.8); }
    
            h4 { color: rgba(247, 103, 7, 0.8); }
        }
    }
`;
