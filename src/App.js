import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import './App.css';
// import CreateTable from './components/CreateTable';
import CreateCsv from './views/CreateCsv';
import Editcsv from './views/Editcsv';
import ImportCsv from './views/ImportCsv';
import EditView from './views/EditView';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateCsv />} />
      <Route path="/edit/:id" element={<Editcsv />} />
      <Route path="/import" element={<ImportCsv />} />
      <Route path="/import/edit/:id" element={<EditView />} />
    </Routes>
  </BrowserRouter>
);

export default App;
