import React from "react";
import styled from "styled-components";
import Badge from "../Dashboard/Badge";
import AvatarImage from "../../images/user.png";
import { FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiPiggyBank } from "react-icons/gi";
import { AiFillBank } from "react-icons/ai";
import { darkThemeColor } from "./utils";
import { Link as LinkR } from "react-router-dom";


const Sidebar = () => {

  const user = JSON.parse(sessionStorage.getItem('user'))
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>{user.fullName}</Name>
        <Badge content="Basic Account" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
          <Go to="/update-profile">
          <CgProfile />
            <h3>Profile</h3>
          </Go>
            
          </Link>
          <Link>
          <Go to="/fund-wallet">
          <GiPiggyBank />
            <h3>Fund Wallet</h3>
          </Go>
            
          </Link>
          <Link>
          <Go to="/withdraw">
          <FaWallet />
            <h3>Withdraw</h3>
          </Go>
            
          </Link>
          <Link>
          <Go to="/update-bank">
          <AiFillBank />
            <h3>Bank</h3>
          </Go>
            
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
};

const Go = styled(LinkR)`
  display: flex;
  gap : 15px;
  text-decoration: none;
  color: #e4e4e4;
`
const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  margin-left: 10px;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
    margin-left: 0;
    border-top-left-radius:0rem;
    border-top-right-radius:0rem;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 5rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;

  margin: 0.8rem 0 0.5rem 0;
`;
const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  font-size: 15px;
`;

const Links = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
  margin-bottom: 25px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    justify-content: center;
    align-items: center;
  }
`;

const Link = styled.div`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  font-size: 15px;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 1%;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 0%;
  }
`;
const ContactContainer = styled.div`
  width: 70%;
  background-color: #01BF71;
  color: #c4c4c4;
  height: 15%;
  margin-top: 10px;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 1rem; */
  font-size: 15px;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
