import React from "react";
import { Link } from "react-router-dom";
import {StyledNav, NavUl, NavLi }  from './index.styles'

const Nav: React.FC = () => {
    return(
        <StyledNav>
            <NavUl>
                <NavLi>
                   <Link to="/">
                        <svg width="30" height="30" fill="none" stroke="#a3a3a3" stroke-NavLinecap="round" stroke-NavLinejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 20v-7.826a4 4 0 0 0-1.253-2.908l-7.373-6.968a2 2 0 0 0-2.748 0L3.253 9.266A4 4 0 0 0 2 12.174V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"></path>
                        </svg>
                   </Link>
                </NavLi>
                <NavLi>
                    <Link to="/search">
                        <svg width="30" height="30" fill="none" stroke="#a3a3a3" stroke-NavLinecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
                            <path d="M15.857 15.86 21 21.001"></path>
                        </svg>
                    </Link>
                </NavLi>
                <NavLi>
                   <Link to="/favorites">
                        <svg width="30" height="30" fill="none" stroke="#a3a3a3" stroke-NavLinecap="round" stroke-NavLinejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.544 3.75c-3.043 0-4.543 3-4.543 3s-1.5-3-4.544-3C4.984 3.75 3.026 5.82 3 8.288c-.051 5.125 4.066 8.77 8.579 11.832a.75.75 0 0 0 .843 0c4.512-3.063 8.63-6.707 8.578-11.832-.025-2.469-1.983-4.538-4.456-4.538Z"></path>
                        </svg>
                   </Link>
                </NavLi>
                <NavLi>
                  <Link to="/user">
                        <svg width="30" height="30" fill="none" stroke="#a3a3a3" stroke-NavLinecap="round" stroke-NavLinejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
                            <path d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"></path>
                        </svg>
                  </Link>
                </NavLi>
            </NavUl>
        </StyledNav>
    );
}

export default Nav;