import styled  from "styled-components";

export const StyledNav = styled.nav`
    background: ${props => props.theme.colors.background};
    border-top: 0.02em solid #c7c7c751;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 520px
`;

export const NavLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width:auto;
    height: 100%;
`;




