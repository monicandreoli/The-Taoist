import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const BannerContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content:center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`;

export const BannerBackground = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-object-fit: cover;
object-fit: cover;
background-color: #0c0c0c;
opacity: 0.4;
`;

export const BannerHeadings = styled.div`
margin-top: 25px;
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const BannerTitle = styled.h1`
color: #F9F9F9;
font-size: 50px;
text-align: center;
@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;
export const BannerP = styled.p`
margin-top: 24px;
color: #F9F9F9;
font-size: 24px;
text-align: center;
max-width: 600px;
text-transform: uppercase;

@media screen and (max-width: 480px) {
    font-size: 18px;
}

`;
export const Span = styled.span`
color: #E95954;
font-weight: 700;
font-size: 30px;
text-transform: uppercase;
`;

export const BannerSignUp = styled.p`
margin-top: 30px;
color: #F9F9F9;
font-size: 20px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 480px) {
    font-size: 15px;
}
`;



export const SignUpBtnWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 50px;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;


export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;