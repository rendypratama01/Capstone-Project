import React from "react";
import tomat from "../assets/tomat.jpg"
//import { Link } from "react-router-dom";
//import { CekTanamanPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from "react-icons/wi";
import { IoWaterOutline } from 'react-icons/io5';

function TomatPage(){
    return (
      <div className="tomat-page">
        <div className="tomat-page__header">
          <h2>Tomat</h2>
        </div>
        <section className="hcms__list-tomat">
              <div className="hcms__list-tomat-item">
                  <div className="tomat__image">
                    <img src={tomat} alt="Gambar Tomat"/>
                  </div>
                  <section className="hcms__list-tomat-item__text">
                    <p>Tomat hidroponik adalah tomat yang tumbuh dalam larutan nutrisi dan bukan di tanah, meskipun mereka biasanya ditempatkan dalam bahan yang bukan tanah yang dapat mendukung akarnya dan memberi nutrisi.</p>
                    <p><FaTemperatureHigh /> 18°C - 25°C</p>
                    <p><WiHumidity /> 25%</p>
                    <p><IoWaterOutline /> 5 cm</p>
                  </section>
              </div>
        </section>
      </div>
    );
  }

export default TomatPage;