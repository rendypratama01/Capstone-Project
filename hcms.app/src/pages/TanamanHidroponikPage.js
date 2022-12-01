import React from "react";
import { Link } from "react-router-dom";
import { SeladaPath, SawiPath, PakcoyPath, TomatPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import selada from '../assets/selada.jpg';
import sawi from '../assets/sawi.jpg';
import pakcoy from '../assets/pakcoy.jpg';
import tomat from '../assets/tomat.jpg';

function TanamanHidroponikPage(){
    return (
      <div className="tanaman-hidroponik-page">
        <div className="tanaman-hidroponik-page__header">
          <h2>Tanaman Hidroponik</h2>
        </div>
            <section className="hcms__list-tanaman-hidroponik">
              <div className="hcms__list-tanaman-hidroponik-item">
                <h3 className="hcms__list-tanaman-hidroponik-item__description"> Selada</h3>
                  <div className="selada__image">
                    <img src={selada} alt="Gambar Selada"/>
                  </div>
                  <section className="hcms__list-tanaman-hidroponik-item__text">
                    <p>Tips dan cara perawatannya.<Link to={`${SeladaPath}`}> Lihat selengkapnya. </Link> </p>
                  </section>
              </div>

              <div className="hcms__list-tanaman-hidroponik-item">
                <h3 className="hcms__list-tanaman-hidroponik-item__description">Sawi</h3>
                  <div className="sawi__image">
                    <img src={sawi} alt="Gambar Sawi"/>
                  </div>
                  <section className="hcms__list-tanaman-hidroponik-item__text">
                    <p>Tips dan cara perawatannya.<Link to={`${SawiPath}`}> Lihat selengkapnya. </Link> </p>
                  </section>
              </div>

              <div className="hcms__list-tanaman-hidroponik-item">
                <h3 className="hcms__list-tanaman-hidroponik-item__description">Pakcoy</h3>
                  <div className="pakcoy__image">
                    <img src={pakcoy} alt="Gambar Pakcoy"/>
                  </div>
                  <section className="hcms__list-tanaman-hidroponik-item__text">
                    <p>Tips dan cara perawatannya.<Link to={`${PakcoyPath}`}> Lihat selengkapnya. </Link> </p>
                  </section>
              </div>

              <div className="hcms__list-tanaman-hidroponik-item">
                <h3 className="hcms__list-tanaman-hidroponik-item__description">Tomat</h3>
                  <div className="tomat__image">
                    <img src={tomat} alt="Gambar Tomat"/>
                  </div>
                  <section className="hcms__list-tanaman-hidroponik-item__text">
                    <p>Tips dan cara perawatannya.<Link to={`${TomatPath}`}> Lihat selengkapnya. </Link> </p>
                  </section>
              </div>
            </section>
      </div>
    );
  }

export default TanamanHidroponikPage;