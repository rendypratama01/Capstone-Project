import React from "react";
import { Link } from "react-router-dom";
import {TanamanHidroponikPath, DetailSuhuRuangPath, DetailKelembapanPath, DetailKetinggianAirPath } from "../routes"

function Monitor(){
  return(
    <section className="monitor">
      <section className="hcms__monitor">
        <div className="hcms__monitor-item">
          <div className='hcms__monitor-item__title'>
            <h2>Pilih Fitur</h2>
          </div>
        </div>
      </section>
        <section className="hcms__list-monitor">
          <Link to={`${DetailSuhuRuangPath}`}>
            <div className="hcms__list-monitor-item">
              <h3 className="hcms__list-monitor-item__description">Suhu Ruang</h3>
            </div>
          </Link>
          <Link to={`${DetailKelembapanPath}`}>
            <div className="hcms__list-monitor-item">
              <h3 className="hcms__list-monitor-item__description">Cek Kelembaban</h3>
            </div>
          </Link>
          <Link to={`${DetailKetinggianAirPath}`}>
            <div className="hcms__list-monitor-item">
              <h3 className="hcms__list-monitor-item__description">Ketinggian Air</h3>
            </div>
          </Link>
          <Link to={`${TanamanHidroponikPath}`}>
            <div className="hcms__list-monitor-item">
              <h3 className="hcms__list-monitor-item__description">Tanaman Hidroponik</h3>
            </div>
          </Link>
        </section>
      </section>
    )
};

export default Monitor;