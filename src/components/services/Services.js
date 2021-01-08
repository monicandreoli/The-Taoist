import React from 'react';
import  iconOne from '../../images/iconOne.svg';
import  iconTwo from '../../images/iconTwo.svg';
import  iconThree from '../../images/iconThree.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={iconOne} />
                    <ServicesH2>Relax your Soul</ServicesH2>
                    <ServicesP>We help you to reduce your stress and increase your happiness.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                <ServicesIcon src={iconTwo} />
                    <ServicesH2>Virtual Peace</ServicesH2>
                    <ServicesP>You can access our platform anywhere in the word and take your YOGA-TIME.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                <ServicesIcon src={iconThree} />
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Unlock our SPECIAL membership and get 20% off each month.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
