import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "./utils";

const Info = () => {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>12</Digit>
            <InfoContainer>
              <Title>Countries</Title>
              <SubTitle>Worldwide</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>8</Digit>
            <InfoContainer>
              <Title>Loan Disbursement</Title>
              <SubTitle>8 this month</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="mobile app" glow />
            <Badge content="branding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
};

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
 
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width:320px) and (max-width : 1080px){
       width: 90%;
      
    }
`;
const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
 
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;

  ${({ justify }) =>
    justify &&
    `
        justify-content: space-around;
        width: 90%;
    `}
`;

const Digit = styled.div`
    /* background-color: ${themeColor}; */
    background-color: #01BF71;
    padding: .8rem 1rem;
    font-size: 1rem;
    border-radius: 1rem;
`;

const InfoContainer = styled.div`
margin-left : .7rem;
`;



const Title = styled.h3`
    color: black;
    font-size: 15px;
`;
const SubTitle = styled.h5`
    color: #333333;
    font-weight: normal;
    font-size: 10px;
`;

export default Info;
