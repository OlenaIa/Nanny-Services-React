import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 246px;
    min-width: 186px;
    margin: 0 auto;
`;

export const NavLinkStyled = styled(NavLink)`
    position: relative;
    font-size: 16px;
    letter-spacing: -0.16px;
    margin-bottom: 12px;

    &.active {
        &:after { 
            position: absolute;
            bottom: -12px;
            left: calc(100% / 2 - 4px);
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
        }  
    }
`;