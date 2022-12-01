import React from "react";
//import { Link } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {FiUser} from 'react-icons/fi'

function Kontak(){
  return(
    <section className="kontak">
      <section className="hcms__kontak">
        <div className="hcms__kontak-item">
          <div className='hcms__kontak-item__title'>
            <h2>Kontak</h2>
          </div>
        </div>
      </section>
      <section className="hcms__list-kontak">
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/> Akbar Andika Khadafi</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> akbrandika123@gmail.com </p>
              <p><FaLinkedin /> Akbar Andika Khadafi</p>
              <p><FaInstagram /> akbraandka</p>
            </section>
          </div>
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/> Annisa Nur Baiti</h3>
            <section className="payu__list-kontak-item__text">
              <p><FaGoogle /> anissanurbaiti354@gmail.com</p>
              <p><FaLinkedin /> Annisa Nur Baiti</p>
              <p><FaInstagram /> annisa_nb29m</p>
            </section>
          </div>
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/>Marselina Rahmawati</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> marselinarahmawati75@gmail.com</p>
              <p><FaLinkedin /> Marselina Rahmawati</p>
              <p><FaInstagram /> marselllinaa_</p>
            </section>
          </div>
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/>Muhammad Rendy Pratama</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> m.rendy5pratama@gmail.com </p>
              <p><FaLinkedin /> Muhammad Rendy Pratama</p>
              <p><FaInstagram /> rendypratama141</p>
            </section>
          </div>
      </section>
    </section>
  )
};

export default Kontak;