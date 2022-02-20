import React from "react";
import { hoverEffect } from "./utils";
import styled from "styled-components";
import  {BsChatQuote} from 'react-icons/bs'

const JoinSlack = () => {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <BsChatQuote />
          </SlackLogo>
          <SlackText>
            <SlackHead>Talk To Support</SlackHead>
            <SlackFoot>Open 7am - 6pm</SlackFoot>
          </SlackText>
        </Slack>
        <SlackJoin>Click Now</SlackJoin>
      </CardContent>
    </JoinChannel>
  );
};

const JoinChannel = styled.div`
  background-color: #01BF71;
  height: 50%;
  margin-top: 5.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width:320px) and (max-width : 1080px){
       width: 90%;
      margin-top: 2rem;
      margin-bottom: 2rem;
      height: max-content;

    }
`;
const CardContent = styled.div`
    margin: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width:320px) and (max-width : 1080px){
       flex-direction: column;
       gap: 1rem;
      
    }
`;

const Slack = styled.div`
    display: flex;
`
const SlackLogo = styled.div`
    margin-right: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        color: white;
        height: 3rem;
        width: 3rem;
    }
`;
const SlackText = styled.div`
    color: white;
`;
const SlackHead = styled.h2`
    font-weight: 500;
`;
const SlackFoot = styled.h5`
    color: #e4e4e4;
    font-weight: normal;
`;
const SlackJoin = styled.button`
    background-color: white;
    border: none;
    outline: none;
    padding: 1rem 2rem;
    color: #01BF71;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 200;
    cursor: pointer;
`;

export default JoinSlack;
