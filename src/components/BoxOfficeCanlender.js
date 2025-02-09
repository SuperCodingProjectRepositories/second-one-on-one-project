import React from 'react';
import './BoxOfficeCanlender.css'

const BoxOfficeCanlender = ({defaultValue,showRange,onChange}) => {
  return (
    <div className="box-office-canlender-container">
      <label>날짜 선택: </label>
      <input type="date" onChange={onChange} value={defaultValue} /> {/* ✅ 날짜 변경 핸들러 적용 */}
      <p>기간: {showRange || "기간 정보 없음"}</p>
    </div>
  );
};

export default BoxOfficeCanlender;