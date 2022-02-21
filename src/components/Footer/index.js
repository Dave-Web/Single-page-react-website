import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinkContainer, 
    FooterLinkWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements'

 const toggleHome = () => {
    scroll.scrollToTop()
 };
    

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to ="/">How it Works</FooterLink>
                            <FooterLink to ="/">Testimonials</FooterLink>
                            <FooterLink to ="/">Careers</FooterLink>
                            <FooterLink to ="/">Partners</FooterLink>
                            <FooterLink to ="/">Terms of Services</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                            <FooterLink to ="/">Web dev</FooterLink>
                            <FooterLink to ="/">App Dev</FooterLink>
                            <FooterLink to ="/">Remote Support</FooterLink>
                            
                    </FooterLinkItems>
                    </FooterLinkWrapper>

                    <FooterLinkWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to ="/">Email</FooterLink>
                            <FooterLink to ="/">WhatsApp</FooterLink>
                            <FooterLink to ="/">Support</FooterLink>
                            
                    </FooterLinkItems>
                    </FooterLinkWrapper>

                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Tech Company
                        </SocialLogo>
                        <WebsiteRights>&copy; {new Date().getFullYear()} All right reserved</WebsiteRights> 
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
