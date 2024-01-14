import {
    HeaderSection,
    HeaderContainer,
} from "./Header.styled";
import { HeaderTitle } from "components/HeaderTitle/HeaderTitle";
import { Navigation } from "components/Navigation/Navigation";
import { HeaderLeftBlock } from "components/HeaderLeftBlock/HeaderLeftBlock";

export const Header = ({homepage}) => {
    return (
        <HeaderSection $homepage={homepage}>
            <HeaderContainer>
                <HeaderTitle />
                <Navigation />
                <HeaderLeftBlock />
            </HeaderContainer>
        </HeaderSection>
    )
};