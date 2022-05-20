/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addImp, cleanImp } from '../redux/importSlice';

const Import = () => {
  const dispatch = useDispatch();
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const processCsv = (str, delim = ';') => {
    const headers = str.slice(0, str.indexOf('\r\n')).split(delim);
    const rows = str.slice(str.indexOf('\r\n') + 2).split('\r\n');

    const newArray = rows.map((row) => {
      const values = row.split(';');
      const eachObject = headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(
      newArray.map((e) => ({
        id: uuidv4(),
        date: e.Fecha,
        description: e.Descripcion,
        amount: e.Monto,
        code: e.Codigo,
      })),
    );
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      processCsv(text);
    };
    reader.readAsText(file);
    setCsvArray([]);
  };
  useEffect(() => {
    if (csvArray.length > 0) {
      dispatch(addImp(csvArray));
    }
  }, [csvArray]);
  return (
    <Form>
      <Label htmlFor="csvFile">Importar csv</Label>
      <Input
        type="file"
        accept=".csv"
        id="csvFile"
        name="csvFile"
        onChange={(e) => setCsvFile(e.target.files[0])}
      />
      <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) submit();
        }}
      >
        Add
      </Button>
    </Form>
  );
};

export default Import;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  background: #ff0157;
  margin: 20px 10px;
  cursor: pointer;
  color: #fff;
  text-align: center;
`;

const Input = styled.input``;

const Button = styled.button`
  height: 30px;
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
