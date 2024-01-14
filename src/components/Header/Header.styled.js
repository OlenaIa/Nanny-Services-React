import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const HeaderSection = styled.header`
    margin: 0 auto;
    width: 100%;
    background-color: var(--color-background-accent);
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    max-height: 88px;
    margin: 0 auto;
    padding: 30px 128px;
    color: var( --color-text-white);
`;

export const HeaderTitles = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 1.17;
    letter-spacing: -0.48px;
    margin-right: 88px;
`;

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

export const HeaderLeftBlock = styled.div`
    display: flex;
    width: 252px;
    min-width: 238px;
    justify-content: space-between;
    align-items: center;
`;

export const UserBlock = styled.div`
    display: flex;
    width: 94px;
    gap: 14px;
    align-items: center;
`;

export const UserSvgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--color-background-hero-and-icon);
`;

export const UserSvg = styled.svg` 
    width: 24px;
    height: 24px;
    fill: var(--color-background-accent);
`;

export const UserName = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    letter-spacing: -0.18px;
`;

export const LogOutButton = styled.p`
    display: inline-flex;
    padding: 14px 39px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 1px solid var(--color-button-border);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.16px;
`;




