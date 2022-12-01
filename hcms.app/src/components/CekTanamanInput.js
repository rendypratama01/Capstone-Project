import React from "react";
import useInput from "../hooks/useInput";
import { FiArrowRight } from "react-icons/fi";

function CekTanamanInput({ cekTanaman }) {
  const [name, onNameChange] = useInput('');
  const [hidroponik, onHidroponikChange] = useInput('');
  const [suhu, onSuhuChange] = useInput('');
  const [kelembapan, onKelembapanChange] = useInput('');
  const [ketinggianAir, onKetinggianAirChange] = useInput('');

  return (
    <div className='input-cek-tanaman'>
      <form className='cek-tanaman-input'>
        <input className="input__action" type="text" placeholder="Nama" value={name} onChange={onNameChange} required/>
        <input className="input__action" type="radio" placeholder="No" value={hidroponik} onChange={onHidroponikChange} required/>
        <input className="input__action" type="radio" placeholder="Yes" value={hidroponik} onChange={onHidroponikChange} required/>
        <input className="input__action" type="text" placeholder="Suhu" value={suhu} onChange={onSuhuChange} required/>
        <input className="input__action" type="text" placeholder="Kelembapan" value={kelembapan} onChange={onKelembapanChange} required/>
        <input className="input__action" type="text" placeholder="Ketinggian Air" value={ketinggianAir} onChange={onKetinggianAirChange} required/>
        <div className='cek-tanaman__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <FiArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CekTanamanInput;