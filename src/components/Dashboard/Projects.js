

import React from 'react'
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "./utils";
import AvatarImage from "../../images/user.png";


const Projects = () =>{
  return <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt=""/>
        </Avatar>
        <Detail>
          <Title>Successful Withdrawal</Title>
          <SubTitle>Via transfer</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Interest Disbursed</Title>
          <SubTitle>20 mins</SubTitle>
        </Detail>
      </Project>
      <AllProjects>See All Projects &gt;&gt;</AllProjects>
  </YourProjects>
}


const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  margin-top: -10px;
  transition: .4s ease-in-out;
&:hover{
  box-shadow: ${hoverEffect}
}

@media screen and (min-width:320px) and (max-width : 1080px){
     height: max-content;
     margin-top: 1rem;  
  width: 90%;

      
    }
`
const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0%.3rem;
`
const Avatar = styled.div`
img{
  height: 3rem;
  width: 3rem;
 
}
`
const Detail = styled.div`
  margin-left: 1rem;

`
const Title = styled.h3`
  font-weight: 500;
  font-size: 15px;
  @media screen and (min-width:320px) and (max-width : 1080px){
       font-size: 1rem;
      
    }
`
const SubTitle = styled.h5`
    font-weight: 500;

`
const AllProjects = styled.h5`
  text-align: end;
  font-size: 12px;
  color: #01BF71;
`



export default Projects