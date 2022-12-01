import React from "react";
import { Link } from "react-router-dom";
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from "../routes";
import { FiLogOut } from "react-icons/fi";
//import { FaUsers, FaCoins } from 'react-icons/fa';

function Home(){
  return(
    <section className="home">
      <section className="hcms__dashboard">
        <div className="hcms__dashboard-item">
          <div className='hcms__dashboard-item__title'>
            <h2>Hai Pengguna!</h2>
          </div>
          <div className="hcms__dashboard-item__hidroponik">
            <div className="hcms__dashboard-item__button">
              {/* <button type='button'><Link to={`${AddNewPath}`}><FiPlusSquare /></Link></button> */}
              <Link to={`${MainPath}`}>
                <button type='button'><FiLogOut /></button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="hcms__list-hidroponik">
        <Link to={`${DetailMonitorPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Monitor</h3>
          </div>
        </Link>
        <Link to={`${DetailCekTanamanPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Cek Tanaman</h3>
          </div>
        </Link>
        <Link to={`${DetailDataTanamanPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Data Tanaman</h3>
          </div>
        </Link>
        <Link to={`${DetailKontakPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Kontak</h3>
          </div>
        </Link>
      </section>
    </section>
  )
};

export default Home;