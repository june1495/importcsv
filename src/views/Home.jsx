import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import Navbar from '../components/Navbar';

const Home = () => (
  <Container>
    <Navbar />
    <Content />
  </Container>
);

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://www.abujadataschool.com/wp-content/uploads/2022/04/Microsoft-Excel-Programme-In-Abuja-Nigeria.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
`;
