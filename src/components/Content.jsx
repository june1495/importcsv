import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Content = () => (
  <Container>
    <ContentArea>
      <Text>What do you want to do?</Text>
      <ButtonGroup>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <Button type="button">Create Csv</Button>
        </Link>
        <Link to="/import" style={{ textDecoration: 'none' }}>
          <Button type="button">Import Csv</Button>
        </Link>
      </ButtonGroup>
    </ContentArea>
  </Container>
);

export default Content;

const Container = styled.div`
  display: flex;
  height: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  margin-bottom: 25px;
  font-size: 45px;
  /* color: #323232; */
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  color: #fff;
  font-size: 16px;
  background: #ff0157;
  display: inline-block;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  margin: 0 20px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  font-family: Poppins;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    color: #323232;
    letter-spacing: 3px;
    transition: 0.5s;
  }
`;
