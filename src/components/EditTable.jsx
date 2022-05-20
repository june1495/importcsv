/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editData } from '../redux/csvSlice';

const EditTable = () => {
  const params = useParams();
  const navigate = useNavigate();
  const arr = useSelector((state) => state.csv);
  const existingArr = arr.filter((e) => e.id === params.id);
  const { id, date, description, amount, code } = existingArr[0];
  const [data, setData] = useState({
    id,
    date,
    description,
    amount,
    code,
  });
  const dispatch = useDispatch();
  // eslint-disable-next-line consistent-return
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(
      editData({
        id: params.id,
        date: data.date,
        description: data.description,
        amount: data.amount,
        code: data.code,
      }),
    );
    navigate('/create');
    setData({});
  };
  return (
    <Form onSubmit={handleUpdate}>
      <Label htmlFor="date">Date:</Label>
      <Input
        type="date"
        id="date"
        name="date"
        onChange={handleChange}
        value={data.date}
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
        value={data.description}
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
        value={data.amount}
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
        value={data.code}
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
      <Button type="submit">Update</Button>
    </Form>
  );
};

export default EditTable;

const Form = styled.form`
  width: 100%;
  height: 150px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aliceblue; */
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
