import React from "react";
//import { Link } from "react-router-dom";
//import { KelembapanPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import { WiHumidity } from "react-icons/wi";

function KelembapanPage(){
    return (
      <div className="Kelembapan-page">
        <div className="Kelembapan-page__header">
          <h2>Kelembapan</h2>
        </div>
        <section className="hcms__list-kelembapan">
          <div className="hcms__list-kelembapan-item">
            <h3 className="hcms__list-kelembapan-item__description">Kelembapan</h3>
            <section className="hcms__list-kelembapan-item__text">
              <p><WiHumidity /> 80%</p>
            </section>
          </div>
        </section>
      </div>
    );
  }

export default KelembapanPage;