import React , {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import {Nav, NavbarContainer, Navlogo,MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Navlogo to='/' onClick={toggleHome}>Tech Company</Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >
                                About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services'
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >Services </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='process'
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >Process</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='blog'
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='solutions'
                            smooth={true} duration={500} spy={true}
                            exact='true' offset={-80}
                            >Solutions</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/reachUs"
                        smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}
                        > Conatct Us</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
