import React from "react";
import selada from "../assets/selada.jpg"
//import { Link } from "react-router-dom";
//import { CekTanamanPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from "react-icons/wi";
import { IoWaterOutline } from 'react-icons/io5';

function SeladaPage(){
    return (
      <div className="selada-page">
        <div className="selada-page__header">
          <h2>Selada</h2>
        </div>
        <section className="hcms__list-selada">
              <div className="hcms__list-selada-item">
                  <div className="selada__image">
                    <img src={selada} alt="Gambar Selada"/>
                  </div>
                  <section className="hcms__list-selada-item__text">
                    <p>Selada (Lactuca sativa) merupakan  sayuran daun yang tergolong ke dalam  genus Lactuca. Selada ini termasuk tanaman semusim  yang memiliki berbagai bentuk, khususnya bentuk daun. Tanaman ini banyak dibudidayakan petani terutama di daerah dataran tinggi atau sekitar pegunungan. Budidaya selada hidroponik merupakan cara baru dalam teknik penanaman yang dilakukan tanpa media tanah. Teknik ini pada dasarnya hanya memanfaatkan air sebagai media tumbuh tanaman. Sistem Hidroponik menggunakan air lebih efisien, sehingga cocok diterapkan pada daerah yang memiliki pasokan air terbatas.  Jika dibandingkan dengan penanaman secara konvensional, hidroponik lebih dapat memberi keuntungan seperti pemanfaatan lahan sempit, pemeliharaan tanaman yang tergolong mudah dan hasil panen higienis sehingga sayuran yang dipanen lebih bersih dan sehat.</p>
                    <p><FaTemperatureHigh /> 25°C - 27°C</p>
                    <p><WiHumidity /> 65% - 78%</p>
                    <p><IoWaterOutline /> 5 cm</p>
                  </section>
              </div>
        </section>
      </div>
    );
  }

export default SeladaPage;