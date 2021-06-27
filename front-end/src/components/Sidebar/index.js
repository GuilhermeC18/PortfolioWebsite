import React from 'react'

//elements 
import { SidebarContainer,
     Icon, 
     CloseIcon,
     SidebarWrapper,
     SidebarLink,
     SidebarMenu,
    } from './sidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
    
    return (
       
          <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu >
                <SidebarLink onClick={toggle} to="/">Homepage</SidebarLink>
                <SidebarLink onClick={toggle} to="/about">About</SidebarLink>
                <SidebarLink onClick={toggle} to="/projects">Projects</SidebarLink>
                <SidebarLink onClick={toggle} to="/contact">Contact</SidebarLink>
               </SidebarMenu>
            </SidebarWrapper>
         </SidebarContainer>
       
    )
}


