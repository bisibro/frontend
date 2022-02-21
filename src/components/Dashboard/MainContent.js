import React from "react";
import styled from "styled-components";
import Earnings from "./Earnings";
import Info from "./Info";
import Invoices from "./Invoices";
import JoinSlack from "./JoinSlack";
import Navbar from "./Navbar";
import ProjectRecommendation from "./ProjectRecommendation";
import Projects from "./Projects";

const MainContent = () => {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Activities</TitleText>
            <Projects />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Crypto Prices</TitleText>
              <Invoices />
            </InvoiceContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Testimonials</TitleText>
            <ProjectRecommendation />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
     
    </Container>
    
  );
};

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    height: max-content;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const TitleText = styled.h3`
  height: 20%;
  font-size: 15px;
`;
const InvoiceContainer = styled.div`
  height: 60%;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    width: 100%;
  }
`;

export default MainContent;
