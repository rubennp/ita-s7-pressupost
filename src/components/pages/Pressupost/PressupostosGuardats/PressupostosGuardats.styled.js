import styled from 'styled-components';

export const Ordena = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
    
    li { 
        display: inline; 
        font-size: 0.75em;

        button {
            border: solid 1px rgb(0, 0, 0, .3);
            border-radius: 5px;
            background-color: rgba(0, 0, 0, .1);

            &.active {
                box-shadow: 1px 1px 5px rgba(50, 50, 50, .5);
                background-color: rgba(0, 0, 0, .3);
                color: white;
                text-shadow: 1px 1px 2px #FFC078;
            }
        }
    
        button:hover {
            cursor: pointer;
            box-shadow: 1px 1px 5px rgba(50, 50, 50, .5);
        }
    }

    li:first-of-type button { margin-left: 5px; }

    li:nth-child(2) { margin: 0 10px; }
`;

export const Llistat = styled.ul`
    padding: 0;
    list-style-type: none;

    .pressupostGuardat {
        display: flex;
        justify-content: space-between;
        margin: 10px;
        padding: 10px;
        background-color: #FFC078;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

        .pressupostData { 
            display: block;
            font-size: 0.75em;
            color: gray;
        }

        &:hover {
            border: 1px solid white;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .actions {
            align-self: center;
        }

        img {
            height: 15px;
            filter: opacity(50%);
            margin-left: 5px;
            
            &:hover {
                cursor: pointer;
                filter: invert();
            }
        }

        .actiu {
            font-weight: bold;
            text-shadow: 1px 1px 1px white;
        }
    }
    }
`;