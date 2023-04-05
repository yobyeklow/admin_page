import React from "react";
import avartar from "../../image/avartar.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <span className="text-3xl material-symbols-outlined">
          calendar_month
        </span>
        <h3>Feburary 2 2023</h3>
      </div>
      <div className="right-header">
        {/* <div className="search-header">
          <input placeholder="Tìm kiếm theo tên,ID,..." type="text" />
          <div className="search-icon">
            <span className="material-symbols-outlined">search</span>
          </div> */}
        {/* </div> */}
        <div className="bell">
          <span className="material-symbols-outlined">notifications</span>
        </div>
        <div className="avartar-header">
          <img src={avartar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
