import React from 'react'
import { 
    SidebarContainer, 
    Icon,
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap 
} from './SidebarElements'

const Sidebar = ({ isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to='about'onClick={toggle}>About</SidebarLink>
                   <SidebarLink to='services'onClick={toggle}>Services</SidebarLink>
                   <SidebarLink to='process'onClick={toggle}>Process</SidebarLink>
                   <SidebarLink to='blog'onClick={toggle}>Blog</SidebarLink>
                   <SidebarLink to='solutions'onClick={toggle}>Solutions</SidebarLink>
                   <SidebarLink to='reachus'onClick={toggle}>Reach Us</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/reachus'>Reach Us</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
