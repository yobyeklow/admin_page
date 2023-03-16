import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../store/user/userState";
const Login = () => {
  const [username, setUserName] = useState("taikhoantest02");
  const [password, setPassword] = useState("123456789");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      userLogin({
        username,
        password,
      })
    );
  };
  return (
    <div>
      <input
        defaultValue={""}
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        defaultValue={""}
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Click</button>
    </div>
  );
};

export default Login;
