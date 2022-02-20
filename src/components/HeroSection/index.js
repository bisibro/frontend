import React, { useState } from "react";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/video.mp4";
import { ButtonLink } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          width="100%"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign Up for a new Account Today and Recieve $250 in credit towards
          your next payment
        </HeroP>
        <HeroBtnWrapper>
          <ButtonLink
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
