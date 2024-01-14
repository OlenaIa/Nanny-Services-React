import styled, { css } from 'styled-components';

export const HeaderSection = styled.header`
${props => {
    if (props.$homepage) {
        return css`
        position: absolute;
        z-index: 10;
        top: 32px;
        left: 0;
        background-color: transparent;
        border-bottom: 1px solid var(--color-button-border);
        `
    }
    return css`
        background-color: var(--color-background-accent);
        `
}}
    margin: 0 auto;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-height: 88px;
    margin: 0 auto;
    padding: 30px 128px;
    color: var( --color-text-white);
`;