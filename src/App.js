import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadToS3 from "./UploadToS3";

function App() {
  return (
    <div className="App">
      <UploadToS3 />
    </div>
  );
}

export default App;
