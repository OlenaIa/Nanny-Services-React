import {
    HeaderSection,
    HeaderContainer,
    HeaderTitles,
    HeaderNav,
    NavLinkStyled,
    HeaderLeftBlock,
    UserBlock,
    UserSvgWrap,
    UserSvg,
    UserName,
    LogOutButton
} from "./Header.styled";
import sprite from '../../assets/sprite.svg';

export const Header = () => {
    return (
        <HeaderSection>
            <HeaderContainer>
                <HeaderTitles>Nanny.Services</HeaderTitles>
                <HeaderNav>
                        <NavLinkStyled to="/">Home</NavLinkStyled>
                        <NavLinkStyled to="/nannies">Nannies</NavLinkStyled>
                        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
                </HeaderNav>
                <HeaderLeftBlock>
                    <UserBlock>
                        <UserSvgWrap>
                            <UserSvg>
                                <use href={`${sprite}#icon-user`} />
                            </UserSvg>
                        </UserSvgWrap>
                            <UserName>Ilona</UserName>
                    </UserBlock>
                        <LogOutButton>Log out</LogOutButton>
                </HeaderLeftBlock>
            </HeaderContainer>
        </HeaderSection>
    )
};