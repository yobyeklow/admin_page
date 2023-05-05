import React, { useEffect, useState } from "react";
import avatarDefault from "../../image/avatarDefault.png";
import { request } from "../utils/request";
const Header = () => {
  const dateNow = new Date().toString().slice(4, 15);
  const [dataUser, setDataUser] = useState(null);
  const userID = localStorage.getItem("userID");
  const handleData = async () => {
    const dataUserID = await request.get(`/user/${userID}`);
    setDataUser(dataUserID.data[0]);
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="header">
      <div className="left-header">
        <span className="text-3xl material-symbols-outlined">
          calendar_month
        </span>
        <h3>{dateNow}</h3>
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
          <img src={`${dataUser?.avatar}` || avatarDefault} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
