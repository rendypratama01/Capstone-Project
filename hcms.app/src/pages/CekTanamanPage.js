import React from "react";
//import { Link } from "react-router-dom";
//import { CekTanamanPath } from '../routes';
import CekTanamanInput from "../components/CekTanamanInput";

function CekTanamanPage(){
    return (
      <div className="Cek-Tanaman-page">
        <div className="Cek-Tanaman-page__header">
          <h2>Cek Tanaman</h2>
          <p>Masukan Data Tanaman</p>
        </div>
        <div className="Cek-Tanaman-page__input">
         <CekTanamanInput />
        </div>
      </div>
    );
  }

export default CekTanamanPage;