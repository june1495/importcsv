import React from 'react';
import Import from '../components/Import';
import Navbar from '../components/Navbar';
import ImportTable from '../components/ImportTable';
import InputImport from '../components/InputImport';

const ImportCsv = () => (
  <>
    <Navbar />
    <Import />
    <InputImport />
    <ImportTable />
  </>
);

export default ImportCsv;
