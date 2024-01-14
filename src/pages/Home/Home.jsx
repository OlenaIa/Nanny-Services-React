import {
    Hero,
    HeroContainer,
    HeroTitle,
    HeroText,
    HeroButton,
    HeroSvg,
    HeroInfoBlock,
    HeroInfoBlockSvgWrap,
    HeroInfoBlockText,
    HeroInfoBlockNumber
} from "./Home.styled";
import hero from '../../assets/hero.png';
import sprite from '../../assets/sprite.svg';
import { Header } from "components/Header/Header";

const Home = () => {
    return (
        <>
            <Header homepage={true} />
            <Hero>
                <HeroContainer $url={hero && `url(${hero})`}>
                    <HeroTitle>Make Life Easier for the Family:</HeroTitle>
                    <HeroText>Find Babysitters Online for All Occasions</HeroText>
                    <HeroButton>Get started
                        <HeroSvg>
                            <use href={`${sprite}#icon-Arrow-up`} />
                        </HeroSvg>
                    </HeroButton>
                    <HeroInfoBlock>
                        <HeroInfoBlockSvgWrap>
                            <HeroSvg size='30px'>
                                <use href={`${sprite}#icon-check`} />
                            </HeroSvg>
                        </HeroInfoBlockSvgWrap>
                        <div>
                            <HeroInfoBlockText>Experienced nannies</HeroInfoBlockText>
                            <HeroInfoBlockNumber>15,000</HeroInfoBlockNumber>
                        </div>
                    </HeroInfoBlock>
                </HeroContainer>
            </Hero>
        </>
    )
};

export default Home;