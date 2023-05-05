import React, { useRef, useState } from "react";
import "../Customers/customerDetail.scss";

import { useLocation, useNavigate } from "react-router-dom";
const CustomerDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="backForward"
      >
        <span class="material-symbols-outlined text-lg text-blue-300">
          west
        </span>
        <h3>Customers</h3>
      </div>
      <div className="customerDetail">
        <div className="customer-form">
          <div className="customer-info">
            <div className="image-customer mb-5">
              <img src={state.item.avatar} alt="" />
              <span className="material-symbols-outlined  icon-camera">
                photo_camera
              </span>
            </div>
            <div className="personal-info">
              <div className="top">
                <div className="left">
                  <MyInput
                    name="name"
                    id="name"
                    label="Name"
                    type="text"
                    value={state.item.name}
                  ></MyInput>
                  <MyInput
                    name="email"
                    id="email"
                    label="Email"
                    type="email"
                    value={state.item.email}
                  ></MyInput>
                  <MyInput
                    name="phone"
                    id="phone"
                    label="Phone Number"
                    type="text"
                    value={state.item.phone}
                  ></MyInput>
                  <MyInput
                    name="username"
                    id="username"
                    label="Username"
                    type="text"
                    value={state.item.username}
                  ></MyInput>
                </div>
              </div>
              <div className="bottom mb-8">
                <MyTextArea
                  name="address"
                  id="address"
                  label="Address"
                  value={state.item.address}
                ></MyTextArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const MyInput = ({ label, ...props }) => {
  return (
    <div className="input-text">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...props} />
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  return (
    <div className="text-area">
      <label className="text-sm" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea {...props} />
    </div>
  );
};
export default CustomerDetailsPage;
