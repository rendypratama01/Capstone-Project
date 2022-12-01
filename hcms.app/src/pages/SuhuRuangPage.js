import React from "react";
//import { Link } from "react-router-dom";
//import DataTanamanInput from "../components/CekTanamanInput";
import { FaTemperatureHigh } from 'react-icons/fa';

function SuhuRuangPage(){
    return (
      <div className="suhu-ruang-page">
        <div className="suhu-ruang-page__header">
          <h2>Suhu Ruang</h2>
        </div>
        <section className="payu__list-suhu-ruang">
          <div className="payu__list-suhu-ruang-item">
            <h3 className="payu__list-suhu-ruang-item__description">Suhu Ruang</h3>
            <section className="payu__suhu-ruang-item__text">
              <p><FaTemperatureHigh /> 30°C</p>
            </section>
          </div>
        </section>
      </div>
    );
  }

export default SuhuRuangPage;