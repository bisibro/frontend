import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  ImgWrap,
  Column1,
  Column2,
  Subtitle,
  BtnWrap,
  Img,
  TopLine,
  Heading,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  lightText,
  id,
  imgStart,
  topLine,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  dark2,
  primary
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
