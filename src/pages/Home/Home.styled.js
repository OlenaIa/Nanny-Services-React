import styled from 'styled-components';

export const Hero = styled.section`
  margin: 0 auto;
  padding: 32px;
  width: 100%;
  background-color: var(--color-background-hero-and-icon);
`;

export const HeroContainer = styled.div`
    position: relative;
    max-width: 1376px;
    max-height: 736px;
    margin: 0 auto;
    padding: 251px 96px 163px 96px;
    background-color: var(--color-background-accent);
    background-image: ${props => props.$url || 'none'};
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
    border-radius: 30px;
    color: var( --color-text-white);
`;

export const HeroTitle = styled.h1`
    max-width: 517px;
    margin-bottom: 28px;
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -2.1px;
`;

export const HeroText = styled.p`
    max-width: 517px;
    margin-bottom: 64px;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.07;
    letter-spacing: -0.56px;
`;

export const HeroButton = styled.button`
    display: flex;
    padding: 18px 50px;
    justify-content: center;
    align-items: center;
    gap: 18px;
    border-radius: 30px;
    border: 1px solid var(--color-button-border);
    background-color: transparent;
    color: inherit;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.2px;
`;

export const HeroSvg = styled.svg` 
    width: ${props => props.size || '18px'};
    height: ${props => props.size || '18px'};
    fill: var(--color-background-hero-and-icon);
`;

export const HeroInfoBlock = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 284px;
    height: 118px;
    padding: 32px;
    border-radius: 20px;
    background-color: var(--color-background-hero-and-icon);
`;

export const HeroInfoBlockSvgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border-radius: 13px;
    background: var( --color-background-accent);
`;


export const HeroInfoBlockText = styled.p`
margin-bottom: 6px;
color: var(--color-text-grey);
font-size: 16px;
line-height: normal;
letter-spacing: -0.3px;
`;

export const HeroInfoBlockNumber = styled.p`
color: var(--color-text-black);
font-size: 24px;
font-weight: 700;
line-height: normal;
`;


