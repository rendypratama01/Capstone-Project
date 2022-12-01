import React from "react";
//import { Link } from "react-router-dom";
//import { KetinggianAIPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import { IoWaterOutline } from 'react-icons/io5';

function KetinggianAirPage(){
    return (
      <div className="Ketinggian-Air-page">
        <div className="Ketinggian-Air-page__header">
          <h2>Ketinggian Air</h2>
        </div>
        <section className="hcms__list-ketinggian-air">
          <div className="hcms__list-ketinggian-air-item">
            <h3 className="hcms__list-ketinggian-air-item__description">Ketinggian Air</h3>
            <section className="hcms__list-ketinggian-air-item__text">
              <p><IoWaterOutline /> 0,5 cm</p>
            </section>
          </div>
        </section>
      </div>
    );
  }

export default KetinggianAirPage;