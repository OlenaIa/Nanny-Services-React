import styled from 'styled-components';

export const NanniesSection = styled.section`
    margin: 0 auto;
    padding: 64px 128px 100px 128px;
    width: 100%;
`;

export const NanniesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1184px;
    margin: 0 auto;
`;

export const NanniesFilterLabel = styled.label`
    color: var( --color-text-filter);
    font-weight: 500;
    line-height: 1.29;
    margin-bottom: 32px;
    align-self: flex-start;
`;

export const customStyles = {
    container: (defaultStyles, state) => ({
        ...defaultStyles,
            marginTop: '8px',
            marginBottom: '8px',
    }),

    valueContainer: (styles) => ({
        ...styles,
        height: '48px',
        padding: '16px 0px 16px 18px',
        margin: '0px',
    }),

    singleValue: (defaultStyles) => ({
        ...defaultStyles,
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '1.11',
        color: 'var(--color-text-white)',
        margin: '0',
    }),
   
   input: (styles) => ({
        ...styles,
        padding: '0px',
        margin: '0px',
  }),

    indicatorSeparator: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: 'transparent',
    }),

    dropdownIndicator: (defaultStyles) => ({
        ...defaultStyles,
        paddingRight: '18px',
        color: 'var(--color-text-white)',
    }),

    menu: (defaultStyles) => ({
        ...defaultStyles,
        width: '226px',
        height: '244px',
        borderRadius: '14px',
        background: 'white',
        boxShadow: '0px 20px 69px 0px rgba(0, 0, 0, 0.07)',
        padding: '14px 72px 18px 18px',
    }),

    menuList: (base) => ({
        ...base,
        padding: '0px',
        fontSize: '18px',
        lineHeight: '1.11',
        fontWeight: '400',
    }),
    
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        fontSize: '18px',
        lineHeight: '1.11',
        fontWeight: '400',
        letterSpacing: '-0.17px',
        color: state.isSelected ? 'var(--color-text-black)' : 'rgba(17, 16, 28, 0.30)',
        backgroundColor: 'transparent', // Стилізація фона активної опції и ховера
        cursor: 'pointer',
        padding: '0px',
        margin: '0px',

        '&:not(:last-child)': {
            marginBottom: '12px'
        },
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        cursor: 'pointer',
        appearance: 'none', // Removing default appearance
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        border: 'none',
        outline: 'none',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '1.11',
        width: '226px',
        height: '48px',
        borderRadius: '14px',
        background: 'var(--color-background-accent)',
        color: 'var(--color-text-white)',
    }),
};

export const NanniesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 64px;
`;

export const LoadMoreButton = styled.button`
    display: inline-flex;
    padding: 14px 40px;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 30px;
    background: var(--color-background-accent);
    color: var(--color-text-white);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.16px;
`;
