/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CsvDownloader from 'react-csv-downloader';
import styled from 'styled-components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { deleteData, cleanData } from '../redux/csvSlice';

const CreateTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.csv.data);
  const [toggle, setToggle] = useState(false);
  const [togle, setTogle] = useState(false);
  const [main, setMain] = useState(true);
  const flat = data?.flat();

  const sorted = flat.map((e) => e).sort((a, b) => (a.date < b.date ? 1 : -1)); // mayor a menor
  const ascend = flat.map((e) => e).sort((a, b) => (a.date < b.date ? -1 : 1));
  useEffect(() => {
    if (!toggle && !togle) {
      setMain(true);
    }
  }, [togle, main, toggle]);
  const remove = (id) => {
    dispatch(deleteData({ id }));
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
          datas={data}
        >
          <Clean>Download</Clean>
        </CsvDownloader>
        <Clean onClick={() => dispatch(cleanData())}>Clean excel sheet</Clean>
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
              Date
              <BsArrowUp
                onClick={() => {
                  setTogle(!togle);
                  setMain(false);
                  setToggle(false);
                }}
              />
            </th>
            <th>Description</th>
            <th>Amount</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            main &&
            data.map((e, index) => (
              <tr key={index}>
                <td>{e.date}</td>
                <td>{e.description}</td>
                <td>{e.amount}</td>
                <td>{e.code}</td>
                <td>
                  <Link to={`/edit/${e.id}`}>
                    <Button type="button">Edit</Button>
                  </Link>
                  <Button type="button" onClick={() => remove(e.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          {sorted?.length > 0 &&
            toggle &&
            sorted.map((e) => (
              <tr key={e.id}>
                <td>{e.date}</td>
                <td>{e.description}</td>
                <td>{e.amount}</td>
                <td>{e.code}</td>
                <td>
                  <Link to={`/edit/${e.id}`}>
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
                  <Link to={`/edit/${e.id}`}>
                    <Button type="button">Edit</Button>
                  </Link>
                  <Button type="button" onClick={() => remove(e.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
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
