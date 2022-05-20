/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CsvDownloader from 'react-csv-downloader';
import styled from 'styled-components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { cleanImp, deleteImp } from '../redux/importSlice';

const CreateTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.import.data);
  const [toggle, setToggle] = useState(false);
  const [togle, setTogle] = useState(false);
  const [main, setMain] = useState(true);
  const flat = data?.flat();
  const sorted = flat.map((e) => e).sort((a, b) => (a.date < b.date ? 1 : -1)); // mayor a menor
  const ascend = flat.map((e) => e).sort((a, b) => (a.date < b.date ? -1 : 1));
  const remove = (id) => {
    dispatch(deleteImp({ id }));
  };
  useEffect(() => {
    data[0]?.length < 1 && dispatch(cleanImp());
  }, [data]);
  useEffect(() => {
    if (!toggle && !togle) {
      setMain(true);
    }
  }, [togle, main, toggle]);

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
          datas={flat}
        >
          <Clean>Download</Clean>
        </CsvDownloader>
        <Clean onClick={() => dispatch(cleanImp())}>Clean excel sheet</Clean>
      </Buttons>
      <table>
        <thead>
          <tr>
            <th>
              <BsArrowDown
                onClick={() => {
                  setToggle(!toggle);
                  setMain(false);
                  setTogle(false);
                }}
              />
              Fecha
              <BsArrowUp
                onClick={() => {
                  setTogle(!togle);
                  setMain(false);
                  setToggle(false);
                }}
              />
            </th>
            <th>Descripción</th>
            <th>monto</th>
            <th>c.u.t</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            main &&
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
          {sorted?.length > 0 &&
            toggle &&
            sorted.map((e) => (
              <tr key={e.id}>
                <td>{e.date}</td>
                <td>{e.description}</td>
                <td>{e.amount}</td>
                <td>{e.code}</td>
                <td>
                  <Link to={`/import/edit/${e.id}`}>
                    <Button type="button">Edit</Button>
                  </Link>
                  <Button type="button" onClick={() => remove(e.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          {ascend?.length > 0 &&
            togle &&
            ascend.map((e) => (
              <tr key={e.id}>
                <td>{e.date}</td>
                <td>{e.description}</td>
                <td>{e.amount}</td>
                <td>{e.code}</td>
                <td>
                  <Link to={`/import/edit/${e.id}`}>
                    <Button type="button">Edit</Button>
                  </Link>
                  <Button type="button" onClick={() => remove(e.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
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
