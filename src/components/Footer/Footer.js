import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialWrap,
    SocialLogo,
    WebsiteRight,
    SocialIconLink,
    SocialIcons

}from './FooterElements';

const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
      }
    return (
        <>
        <FooterContainer>
               <FooterWrap>
                   <FooterLinksContainer>
                       <FooterLinksWrapper>
                           <FooterLinkItems>
                               <FooterLinkTitle>About us</FooterLinkTitle>
                                   <FooterLink to='/'>How it works</FooterLink>
                                   <FooterLink to='/'>Testimonials</FooterLink>
                                   <FooterLink to='/'>Careers</FooterLink>
                                   <FooterLink to='/'>Investors</FooterLink>
                                   <FooterLink to='/'>Terms of Services</FooterLink>
                           </FooterLinkItems>

                           <FooterLinkItems>
                               <FooterLinkTitle>Contact us</FooterLinkTitle>
                                   <FooterLink to='/'>Contact</FooterLink>
                                   <FooterLink to='/'>Support</FooterLink>
                                   <FooterLink to='/'>Destinations</FooterLink>
                                   <FooterLink to='/'>Sponsorships</FooterLink>
                           </FooterLinkItems>
                       </FooterLinksWrapper>

                       <FooterLinksWrapper>
                           <FooterLinkItems>
                               <FooterLinkTitle>Videos</FooterLinkTitle>
                                   <FooterLink to='/'>Submit Video</FooterLink>
                                   <FooterLink to='/'>Ambassadors</FooterLink>
                                   <FooterLink to='/'>Agency</FooterLink>
                                   <FooterLink to='/'>Influencer</FooterLink>
                           </FooterLinkItems>

                           <FooterLinkItems>
                               <FooterLinkTitle>My Account</FooterLinkTitle>
                                   <FooterLink to='/signin'>My Courses</FooterLink>
                                   <FooterLink to='/signin'>Personal Info</FooterLink>
                                   <FooterLink to='/signin'>Status</FooterLink>
                                   <FooterLink to='/signin'>Contact a Teacher</FooterLink>
                                   <FooterLink to='/signin'>Vouchers</FooterLink>
                           </FooterLinkItems>
                       </FooterLinksWrapper>
                   </FooterLinksContainer>

                   <SocialMedia>
                       <SocialWrap>
                           <SocialLogo to='/' onClick={toggleHome}>
                                    the taoist
                           </SocialLogo>
                           <WebsiteRight>THETAOIST &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                        <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label='Facebook'>
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label='Instagram'>
                            <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label='Youtube'>
                            <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label='Twitter'>
                            <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label='Linkedin'>
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                     </SocialWrap>
                   </SocialMedia>
               </FooterWrap>
       </FooterContainer>
       </>
    )
}

export default Footer
