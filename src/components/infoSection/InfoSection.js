import React from 'react';
import { Button } from '../ButtonElements';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    ColumnTwo,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ColumnOne,
    Img,
    ImgWrap } from './InfoElements';


const InfoSection = ({
    lightBg,
     id,
     imgStart,
     topLine,
     headline,
     lightText,
     darkText,
     description,
     buttonLabel,
     img,
     alt,
     primary,
     dark,
     }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <ColumnOne>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0 }
                                dark={dark ? 1 : 0 }

                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </ColumnOne>
                    <ColumnTwo>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </ColumnTwo>
                </InfoRow>
            </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
