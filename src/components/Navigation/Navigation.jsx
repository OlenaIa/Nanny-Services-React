import { HeaderNav, NavLinkStyled } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/nannies">Nannies</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </HeaderNav>
    )
};