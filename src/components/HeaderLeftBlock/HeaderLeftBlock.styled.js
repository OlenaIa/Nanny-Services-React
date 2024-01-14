import styled from "styled-components";

export const BlockWrap = styled.div`
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