import React from "react";
import pakcoy from "../assets/pakcoy.jpg"
//import { Link } from "react-router-dom";
//import { CekTanamanPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from "react-icons/wi";
import { IoWaterOutline } from 'react-icons/io5';

function PakcoyPage(){
    return (
      <div className="pakcoy-page">
        <div className="pakcoy-page__header">
          <h2>Pakcoy</h2>
        </div>
        <section className="hcms__list-pakcoy">
              <div className="hcms__list-pakcoy-item">
                  <div className="pakcoy__image">
                    <img src={pakcoy} alt="Gambar Pakcoy"/>
                  </div>
                  <section className="hcms__list-pakcoy-item__text">
                    <p>Pakcoy (Brassica rapa L) merupakan sayuran yang tampilannya sangat mirip dengan sawi. Jika sawi batangnya lebih ramping dan memanjang, pakcoy memiliki batang yang lebih besar dan pendek, serta struktur daunnya lebar. Tanaman yang terkenal dengan sebutan sawi daging ini memiliki rahasia ajaib yang masih jarang diketahui masyarakat antara lain yaitu kandungan vitamin A tinggi mampu menjaga kornea mata agar selalu sehat. Kandungan vitamin E pada pakcoy berfungsi sebagai antioksidan di dalam sel, kandungan vitamin K yang sangat tinggi berguna dalam membantu proses pembekuan darah, mencegah penyakit jantung dan stroke. Selain itu, tanaman yang mengandung folat sangat baik dikonsumsi oleh ibu hamil, karena folat berfungsi untuk mencegah terjadinya cacat tabung saraf, kelainan pembentukan otak atau terjadinya kemungkinan kelainan tulang belakang pada janin.</p>
                    <p><FaTemperatureHigh /> 10°C - 21°C</p>
                    <p><WiHumidity /> 80% - 90%</p>
                    <p><IoWaterOutline /> 5 cm</p>
                  </section>
              </div>
        </section>
      </div>
    );
  }

export default PakcoyPage;