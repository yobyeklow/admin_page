import React, { useEffect, useRef, useState } from "react";
import "../Login/Login.scss";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import { request } from "../../utils/request";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const [data, setData] = useState(null);
  const [err, setError] = useState(null);
  const handleChange = () => {
    setError(null);
  };

  const handleLogin = (values) => {
    request
      .post("/auth/signin-admin", values)
      .then((res) => {
        setData(res.data);
        console.log(res.headers.get("x-access-token"));
        localStorage.setItem("accessToken", res.data.accessToken);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <>
      {localStorage.getItem("accessToken") !== null ? (
        <Navigate to="/"></Navigate>
      ) : (
        <div className="login-page">
          <div className="login-box">
            <h3 className="title">Sign In</h3>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={(values, { resetForm }) => {
                resetForm({
                  username: "",
                  password: "",
                });
                handleLogin(values);
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .required("Required")
                  .min(8, "Username must be at least 8 characters"),
                password: Yup.string()
                  .required("Required")
                  .min(8, "Password must be at least 8 characters"),
              })}
            >
              {(formik) => {
                return (
                  <Form autoComplete="off" className="">
                    <div>
                      <MyInput
                        label="Username"
                        id="username"
                        name="username"
                        type="text"
                      ></MyInput>
                    </div>
                    <MyInput
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                    ></MyInput>
                    <button type="submit" className="btn-login">
                      Log In
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5 flex-1">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="border border-gray-300 rounded-lg w-full max-w-[600px] p-4"
        {...props}
        {...field}
      ></input>
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default Login;
