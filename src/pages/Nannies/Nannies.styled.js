import styled from 'styled-components';

export const NanniesSection = styled.section`
    margin: 0 auto;
    padding: 64px 128px 100px 128px;
    width: 100%;
`;

export const NanniesContainer = styled.div`
    max-width: 1184px;
    margin: 0 auto;
`;

export const NanniesFilterLabel = styled.label`
    color: var( --color-text-filter);
    font-weight: 500;
    line-height: 1.29;
    margin-bottom: 32px;
`;

export const NanniesCard = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    max-width: 1184px;
    min-height: 318px;
    padding: 24px;
    border-radius: 24px;
    background-color: var(--color-background-hero-and-icon);
`;

export const NanniesPhoto = styled.div`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    padding: 12px;
    border-radius: 30px;
    border: 2px solid var(--color-background-avatar);
`;

export const PhotoWrap = styled.div`
    width: 96px;
    height: 96px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow: hidden;
`;

export const CardHeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 946px;
    margin-bottom: 8px;
`;

export const CardHeaderText = styled.p`
color: var(--color-text-filter);
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`;

export const CardHeaderList = styled.ul`
    display: flex;
    gap: 32px;
    align-items: center;
    color: var(--color-text-black);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`;

export const CardHeaderItem = styled.li`
    position: relative;
    display: flex;
    gap: 8px;
    align-items: center;

    &:not(:first-child) {
        &:before {
        position: absolute;
        top: 4px;
        left: -16px;
        display: block;
        height: 16px;
        width: 1px;
        background-color: rgba(17, 16, 28, 0.20);
        content: '';
    }}
`;

export const CardHeaderSvg = styled.svg`
    width: ${props => props.size || '16px'};
    height: ${props => props.size || '16px'}; 
    stroke: ${props => props.color || 'var(--color-text-black)'};
    fill: ${props => props.color || 'transparent'};
`;

export const Price = styled.span`
    color: var(--color-text-price);
`;

export const NannyName = styled.h3`
    color: var(--color-text-black);
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 24px;
`;

export const NannyDataList = styled.ul`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;

export const NannyDataItem = styled.li`
    padding: 8px 16px;
    border-radius: 24px;
    background-color: var(--color-background-primary);
    color: var(--color-text-filter);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`;

export const NannyDataSpan = styled.span`
    color: var(--color-text-black);
`;

export const NannyDescription = styled.p`
    font-size: 16px;
    margin-bottom: 14px;
`;
