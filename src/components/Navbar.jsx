import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Container>
    <Content>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>
          CsvReader
          <span>.</span>
        </Logo>
      </Link>
      <Right>
        <Link to="/import" style={{ textDecoration: 'none' }}>
          <Csv type="button">Import Csv</Csv>
        </Link>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <Csv type="button">Create Csv</Csv>
        </Link>
      </Right>
    </Content>
  </Container>
);

export default Navbar;

const Container = styled.div`
  box-shadow: 2px 45px 24px -34px rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin: 20px 20px;
  font-size: 40px;
  width: max-content;
  color: #323332;
  cursor: pointer;
  span {
    color: #ff0157;
  }
`;

const Right = styled.div`
  margin-right: 50px;
`;

const Csv = styled.button`
  color: #fff;
  font-size: 14px;
  background: #ff0157;
  display: inline-block;
  font-weight: bold;
  border: none;
  padding: 5px 10px;
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
