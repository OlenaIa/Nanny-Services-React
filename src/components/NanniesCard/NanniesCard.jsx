import noPhoto from '../../assets/no-image.png';
import sprite from '../../assets/sprite.svg';
import {
    NanniesCardStyled,
    NanniesPhoto,
    PhotoWrap,
    CardHeaderWrap,
    CardHeaderText,
    CardHeaderSvg,
    CardHeaderList,
    CardHeaderItem,
    Price,
    NannyName,
    NannyDataList,
    NannyDataItem,
    NannyDataSpan,
    NannyDescription,
    ReadMore,
} from './NanniesCard.styled';

export const NanniesCard = () => {
    return (
        <NanniesCardStyled>
            <NanniesPhoto>
                <PhotoWrap>
                    <img src={noPhoto} width='96' height='96' alt="Nanny's avatar" />
                </PhotoWrap>
            </NanniesPhoto>
            <div>
                <CardHeaderWrap>
                    <CardHeaderText>Nanny</CardHeaderText>
                    <CardHeaderList>
                        <CardHeaderItem>
                            <CardHeaderSvg>
                                <use href={`${sprite}#icon-map`} />
                            </CardHeaderSvg>
                            <p>Lviv, Ukraine</p>
                                    
                        </CardHeaderItem>
                        <CardHeaderItem>
                            <CardHeaderSvg color='var(--color-background-star)'>
                                <use href={`${sprite}#icon-star`} />
                            </CardHeaderSvg>
                            <p>Rating: 4.5</p>
                        </CardHeaderItem>
                        <CardHeaderItem>
                            <p>Price / 1 hour: <Price>16$</Price></p>
                        </CardHeaderItem>
                    </CardHeaderList>
                    <CardHeaderSvg size='26px'>
                        <use href={`${sprite}#icon-heart`} />
                    </CardHeaderSvg>
                </CardHeaderWrap>
                <NannyName>Maria Kovalenko</NannyName>
                <NannyDataList>
                    <NannyDataItem>Age: <NannyDataSpan $underline='underline'>29</NannyDataSpan></NannyDataItem>
                    <NannyDataItem>Experience: <NannyDataSpan>6 years</NannyDataSpan></NannyDataItem>
                    <NannyDataItem>Kids Age: <NannyDataSpan>2 to 10 years old</NannyDataSpan></NannyDataItem>
                    <NannyDataItem>Characters: <NannyDataSpan>Empathetic, Skilled, Observant, Enthusiastic</NannyDataSpan></NannyDataItem>
                    <NannyDataItem>Education: <NannyDataSpan>Bachelor's in Child Development, Special Needs Child Care Training</NannyDataSpan></NannyDataItem>
                </NannyDataList>
                <NannyDescription>I lhave a passion for teaching and mentoring children. I aim to help them grow and learn in a safe and loving environment. I am also a trained child psychologist, which helps me in understanding and catering to the unique needs of every child.</NannyDescription>
                <ReadMore to="/">Read more</ReadMore>
            </div>
        </NanniesCardStyled>
    )
};