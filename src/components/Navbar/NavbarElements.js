import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav `
background: ${({scrollNav}) => scrollNav ? "#0a0a0a" : "transparent"};
box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.1);
height: 80px;
margin-top: -80px;
display: flex;
justify-content:center;
align-items: center;
font-size: 0.9rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
color: #E95954;
justify-self: flex-start;
cursor: pointer;
font-size:1.5rem;
display: flex;
align-items: center;
margin-left: 18px;
font-weight: 900;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
    color: #F9F9F9;

}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
color: #F9F9F9;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
    color: #E95954;
}
&.active {
border-bottom: 3px solid #E95954;
color: #E95954;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
display: none;

}
`;

export const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #E95954;
padding: 10px 22px;
color: #F9F9F9;
font-size: 15px;
outline: none;
border: 2px solid #E95954;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;

}
`;
