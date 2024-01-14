import {
    BlockWrap,
    LogOutButton,
    UserBlock,
    UserName,
    UserSvg,
    UserSvgWrap
} from "./HeaderLeftBlock.styled";
import sprite from '../../assets/sprite.svg';

export const HeaderLeftBlock = () => {
    return (
        <BlockWrap>
            <UserBlock>
                <UserSvgWrap>
                    <UserSvg>
                        <use href={`${sprite}#icon-user`} />
                    </UserSvg>
                </UserSvgWrap>
                <UserName>Ilona</UserName>
            </UserBlock>
            <LogOutButton>Log out</LogOutButton>
        </BlockWrap>
    )
};