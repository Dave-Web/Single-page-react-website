import React from 'react'
import { Button } from '../ButtonElements'
import { 
    InforContainer,
    InforWrapper, 
    InforRow, 
    Column1, 
    Column2,
    TextWrapper, 
    TopLine, 
    Heading, 
    Substitle, 
    BtnWrap, 
    ImgWrap, 
    Img
} from './InforElements'

const InforSection = ( {lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, 
    img, alt, primary,
    dark,
    dark2} ) => {
    return (
        <>
            <InforContainer lightBg={lightBg} id={id}>
                <InforWrapper>
                    <InforRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Substitle darkText={darkText}>{description}</Substitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={ dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img img src={img}  alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InforRow>
                </InforWrapper>
            </InforContainer>

        </>
    )
}

export default InforSection
