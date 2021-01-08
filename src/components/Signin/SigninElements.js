import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
height: auto;
min-height: 100vh;
background:#0a0a0a;

`;

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and ( max-width: 400px) {
height: 80%;
}
`;

export const Icon = styled(Link)`
margin: 32px;
color: #E95954;
cursor: pointer;
font-size:1.5rem;
display: fixed;
text-transform: uppercase;
font-weight: 900;
text-decoration: none;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;


export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 480px) {
  padding: 10px;
}
`;


export const Form = styled.form`
background: #f9f9f9;
margin: auto;
max-width: 450px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;

}
`;

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #0a0a0a;
font-size: 20px;
font-weight: 900px;
text-align: center;

`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #0a0a0a;
`;


export const FormInput = styled.input`
padding: 16px;
margin-bottom: 32px;
border: none;
outline: none;
border-radius: 4px;

&:active, &:hover {
    border: none;
outline: none;
}

`;

export const FormButton = styled.button`
border-radius: 50px;
background: #E95954;
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
    color: #E95954;
    background: transparent;
}
`;



export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #0a0a0a;
font-size: 14px;
cursor: pointer;
font-weight: 500;

&:hover {
    color: #E95954;
`;
