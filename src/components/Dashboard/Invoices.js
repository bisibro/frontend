import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "./utils";
import AvatarImage from "../../images/user.png";

const Invoices = () => {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Bitcoin</Title>
              <SubTitle>$BTC</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="+0.03% " paid />
            <Price>$39,997.20</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Ethereum</Title>
              <SubTitle>ETH</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="-0.02% 🔻" late />
            <Price>$2,751.27</Price>
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
};

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  height: 140%;
  background-color: white;
  box-shadow: ${cardShadow};
  margin-top: -10px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;
const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;

  @media screen and (min-width:320px) and (max-width : 1080px){
      flex-direction: column;
      gap: 1rem;
    }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media screen and (min-width:320px) and (max-width : 1080px){
        flex-direction: column;
        width: 100%;
        text-align: center;
      
    }
`;
const Avatar = styled.div`
  img {
    height: 3rem;
    width: 3rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.div`
  font-weight: 400;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;

    @media screen and (min-width:320px) and (max-width : 1080px){
       width: 100%;
      flex-direction: column;
      gap: 0.6rem;
    }
`;
const Price = styled.div``;
export default Invoices;
