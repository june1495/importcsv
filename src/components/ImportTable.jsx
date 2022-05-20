/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CsvDownloader from 'react-csv-downloader';
import styled from 'styled-components';
import { cleanImp, deleteImp } from '../redux/importSlice';

const CreateTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.import.data);

  const mapped = data.find((a) => a);
  const remove = (id) => {
    dispatch(deleteImp({ id }));
  };

  const columns = [
    {
      id: 'date',
      displayName: 'Fecha',
    },
    {
      id: 'description',
      displayName: 'Descripcion',
    },
    {
      id: 'amount',
      displayName: 'Monto',
    },
    {
      id: 'code',
      displayName: 'Codigo',
    },
  ];

  return (
    <>
      <Buttons>
        <CsvDownloader
          filename="myfile"
          extension=".csv"
          separator=";"
          wrapColumnChar=""
          columns={columns}
          datas={mapped}
        >
          <Clean>Download</Clean>
        </CsvDownloader>
        <Clean onClick={() => dispatch(cleanImp())}>Clean excel sheet</Clean>
      </Buttons>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>monto</th>
            <th>c.u.t</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((e) =>
              e.map((b) => (
                <tr key={b.id}>
                  <td>{b.date}</td>
                  <td>{b.description}</td>
                  <td>{b.amount}</td>
                  <td>{b.code}</td>
                  <td>
                    <Link to={`/import/edit/${b.id}`}>
                      <Button type="button">Edit</Button>
                    </Link>
                    <Button type="button" onClick={() => remove(b.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )),
            )}
          {/* <tr>
          <td>30/03/2020</td>
          <td>Transferencia bancaria</td>
          <td>$3000</td>
          <td>20205541</td>
          <td>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </td>
        </tr> */}

          {/* <tr>
        <td colSpan={3}>No users</td>
      </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default CreateTable;

const Clean = styled.button`
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

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const Button = styled.button`
  color: #fff;
  font-size: 12px;
  background: #ff0157;
  display: inline-block;
  font-weight: bold;
  border: none;
  padding: 0px 5px;
  margin: 0 5px;
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
