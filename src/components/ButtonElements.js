import styled from 'styled-components'
import { Link } from "react-scroll";

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? 'transparent' : '#E95954' )};
white-space: nowrap;
padding:12px 30px;
color: #F9F9F9;
font-size: 18px;
outline: none;
font-weight: 500;
border: 2px solid #E95954;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    color: ${({dark}) => (dark ?  '#F9F9F9' : '#E95954')};
    background: ${({primary}) => (primary ? '#E95954' : 'transparent' )};
}
`;

