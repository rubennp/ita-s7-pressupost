import styled from 'styled-components';

export const Menu = styled.nav`
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;

    ul {
        li {
            display: inline;

            &:not(:first-of-type) {
                margin-left: 20px;
            }

            a {
                color: black !important;
                text-decoration: none;
                padding-bottom: 5px;

                &:hover {
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
                }

                &.active {
                    border-bottom: 5px solid rgba(247, 103, 7, 0.5);
                }
            }
        }
    } 
`;