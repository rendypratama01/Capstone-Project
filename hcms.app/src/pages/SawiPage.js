import React from "react";
import sawi from "../assets/sawi.jpg"
//import { Link } from "react-router-dom";
//import { CekTanamanPath } from '../routes';
//import DataTanamanInput from "../components/CekTanamanInput";
import { FaTemperatureHigh } from 'react-icons/fa';
import { WiHumidity } from "react-icons/wi";
import { IoWaterOutline } from 'react-icons/io5';

function SawiPage(){
    return (
      <div className="sawi-page">
        <div className="sawi-page__header">
          <h2>Sawi</h2>
        </div>
        <section className="hcms__list-sawi">
              <div className="hcms__list-sawi-item">
                  <div className="sawi__image">
                    <img src={sawi} alt="Gambar Sawi"/>
                  </div>
                  <section className="hcms__list-sawi-item__text">
                    <p>Tanaman sawi merupakan salah satu jenis tanaman sayur yang saat ini banyak dikembangkan dengan sistem hidroponik. Hal ini karena selain perawatannya yang mudah, permintaan pasar akan tanaman sawi juga cukup tinggi.Sebagai tanaman sayur, sawi biasanya banyak dimanfaatkan dalam berbagai olahan makanan seperti tumis, mie ayam, bakso, sup, capcay dll. Tanaman sawi sendiri sebenarnya ada bermacam-macam jenisnya. Ada sawi hijau (brassica juncea) atau sering disebut juga dengan sawi bakso, caisim, atau caisin. Sawi putih (brassica rapa) atau disebut juga dengan petsai. Kailan (brassica oleracea) adalah jenis sawi lain yang agak berbeda, karena memiliki daun yang lebih tebal dan lebih cocok menjadi bahan campuran mi goreng.</p>
                    <p>Dari jenis-jenis sawi di atas, jenis sawi yang biasa dibudidayakan adalah sawi hijau (Caisim). Semua jenis sawi tersebut dapat dibudidayakan dengan sistem hidroponik. Tapi umumnya, jenis sawi yang banyak dikembangkan adalah jenis sawi hijau (caisim) dan sawi sendok (pokcay). Cara menanam sawi hidroponik dengan sistem sumbu. Karena sistem ini merupakan sistem hidroponik yang paling sederhana dan mudah dilakukan, terutama bagi ibu ibu di rumah atau yang baru akan memulai menanam dengan sistem hidroponik.</p>
                    <p><FaTemperatureHigh /> 16°C - 28°C</p>
                    <p><WiHumidity /> 80% - 90%</p>
                    <p><IoWaterOutline /> 5 cm</p>
                  </section>
              </div>
        </section>
      </div>
    );
  }

export default SawiPage;