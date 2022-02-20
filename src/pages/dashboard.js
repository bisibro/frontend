import React, { useEffect } from "react";
// import './dashboard.css'
import styled from "styled-components";
import MainContent from "../components/Dashboard/MainContent";
import Sidebar from "../components/Dashboard/Sidebar";
import TawkTo from "tawkto-react";

const Dashboard = () => {
  useEffect(() => {
    const tawk = new TawkTo("620a265fb9e4e21181befc34", "1frrqbq25");

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
    
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  /* background-color:#010606; */
  /* border-radius: 2rem; */

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Dashboard;
