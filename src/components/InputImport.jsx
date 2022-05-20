/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addOne } from '../redux/importSlice';

const InputImport = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const imported = useSelector((state) => state.import.data);
  const flat = imported.flat();
  const [toggle, setToggle] = useState(false);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (flat.length > 0) {
      setToggle(true);
    }
  }, [imported]);
  const handleChange = (e) => {
    setData({
      ...data,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(addOne(data));
    setData({});
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="date">Date:</Label>
      <Input
        type="date"
        id="date"
        name="date"
        onChange={handleChange}
        autoComplete="off"
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        required
      />
      <Label htmlFor="description">Description:</Label>
      <Input
        type="text"
        placeholder="description"
        id="description"
        autoComplete="off"
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        name="description"
        pattern="[^\s]+[a-zA-Z0-9 ]{2,254}"
        onInvalid={(e) =>
          e.target.setCustomValidity('Solo pueden ingresarse letras,numeros,-_')
        }
        onInput={(e) => e.target.setCustomValidity('')}
        onChange={handleChange}
        required
      />
      <Label htmlFor="amount">Amount:</Label>
      <Input
        type="number"
        placeholder="amount"
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        autoComplete="off"
        id="amount"
        step="0.01"
        name="amount"
        onChange={handleChange}
        required
      />
      <Label htmlFor="code">Code:</Label>
      <Input
        type="text"
        placeholder="code"
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
        id="code"
        name="code"
        autoComplete="off"
        onChange={handleChange}
        pattern="[^\s]+[a-zA-Z0-9 ]{2,254}"
        onInvalid={(e) =>
          e.target.setCustomValidity('Solo pueden ingresarse letras,numeros,-_')
        }
        onInput={(e) => e.target.setCustomValidity('')}
        required
      />
      {toggle ? (
        <Button type="submit">Add</Button>
      ) : (
        <div style={{ color: 'red' }}>Importar primero</div>
      )}
    </Form>
  );
};

export default InputImport;

const Form = styled.form`
  width: 100%;
  height: 100px;
  margin-top: 0px;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const Input = styled.input`
  margin: 10px 10px;
  border-radius: 5px;
  padding: 0px 10px;
  outline: none;
  ::placeholder {
    color: #323232;
    text-align: center;
  }
`;

const Label = styled.label``;

const Button = styled.button`
  color: #fff;
  font-size: 16px;
  background: #ff0157;
  display: inline-block;
  font-weight: bold;
  border: none;
  padding: 0px 20px;
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
    transition: 0.5s;
  }
`;
