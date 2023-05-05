import React, { Fragment, useEffect, useRef, useState } from "react";

import "../../sass/productDetailPages.scss";
import { Form, Formik, useField } from "formik";
import ImageInput from "../Product/ImageInput";
import { useLocation, useNavigate } from "react-router-dom";
import { request } from "../../utils/request";
import * as Yup from "yup";
const ProductDetailPage = (props) => {
  const [width, setWidth] = useState(0);
  const span = useRef();
  let { state } = useLocation();
  const navigate = useNavigate();

  const [content, setContent] = useState(`${state.item.name}`);
  useEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [content]);
  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };
  const [saleStatus, setSaleStatus] = useState(`${state.item.sale.isOnSale}`);
  const handleUpdateData = async (values) => {
    await request
      .put(`/products/${state.item._id}`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {state && (
        <Formik
          onSubmit={(values, action) => {
            if (values.sale.isOnSale === false) {
              values.sale.salePercentage = 0;
            }
            // values.name = content;
            handleUpdateData(values);
          }}
          initialValues={{
            ...state.item,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Required")
              .min(8, "Minimum 10 characters"),
            description: Yup.string()
              .required("Required")
              .min(10, "Please enter the description of product"),
            price: Yup.number()
              .required("Required")
              .positive("Must be a positive number"),
            quantity: Yup.number()
              .required("Required")
              .positive("Must be a positive number"),
            color: Yup.string().required("Required"),
            brand: Yup.string().required("Required"),
            category: Yup.string().required("Required"),
          })}
        >
          {(formik) => (
            <Form className="productDetail">
              <div
                onClick={() => navigate(-1)}
                className="backForward flex items-center gap-3 mb-5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg text-blue-300">
                  west
                </span>
                <span className="text-lg text-blue-300">Products</span>
              </div>
              <div className="top-content">
                <div className="item-name">
                  <wrapper is="custom">
                    <span id="hide" ref={span}>
                      {content}
                    </span>
                    <input
                      value={content}
                      type="text"
                      style={{ width }}
                      onChange={(e) => {
                        changeHandler(e);
                        formik.handleChange(e);
                      }}
                      id="name"
                      name="name"
                      autoFocus
                    />
                  </wrapper>
                  <label htmlFor="name">
                    <span className="material-symbols-outlined">reply</span>
                  </label>
                </div>
                <button type="Submit">Publish</button>
              </div>
              {formik.errors.name && formik.touched.name && (
                <p className="text-red-600 text-base">{formik.errors.name}</p>
              )}
              <div className="middle-content">
                <div className="left-content">
                  <div className="image-info">
                    <ImageInput
                      formik={formik}
                      imagesProps={state.item.images}
                    ></ImageInput>
                  </div>
                  <div className="general-info">
                    <h1 className="text-2xl font-bold text-gray-600 mb-5">
                      General Info
                    </h1>
                    <div className="flex items-center justify-between gap-10">
                      <MySelect
                        onChange={(value) =>
                          formik.setFieldValue("color", value)
                        }
                        value={formik.values.color}
                        name="color"
                        label="Color"
                        id="color"
                      >
                        <option value="">Select color options...</option>
                        <option value="sliver">Sliver</option>
                        <option value="white">White </option>
                        <option value="gold">Gold</option>
                        <option value="red">Red</option>
                        <option value="purple">Purple</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                      </MySelect>
                    </div>
                    <MyTextArea
                      name="description"
                      label="Description"
                      id="description"
                      value={state.item.descriptions}
                    ></MyTextArea>
                    <div className="flex items-center mt-5 justify-between gap-10">
                      <MyInput name="price" label="Price" id="price"></MyInput>
                      <MyInput
                        name="quantity"
                        label="Quantity"
                        id="quantity"
                      ></MyInput>
                      <MyInput
                        name="sold"
                        label="Sold"
                        id="sold"
                        disabled
                      ></MyInput>
                    </div>
                  </div>
                  <div className="general-info">
                    <h1 className="text-2xl font-bold text-gray-600 mb-5">
                      Properties
                    </h1>
                    <div className="flex items-center justify-between  gap-10">
                      <MySelect
                        onChange={(value) =>
                          formik.setFieldValue("brand", value)
                        }
                        value={formik.values.brand}
                        name="brand"
                        label="Product Brand"
                        id="brand"
                      >
                        <option value="">Select brand options...</option>
                        <option value="American">America</option>
                        <option value="China">China</option>
                        <option value="HongKong">HongKong</option>
                      </MySelect>

                      <MySelect
                        onChange={(value) =>
                          formik.setFieldValue("category", value)
                        }
                        name="category"
                        label="Category"
                        id="category"
                      >
                        <option value="">Select category options...</option>
                        <option value="mobile">Mobile</option>
                        <option value="accessories">Accessories</option>
                      </MySelect>
                      <MySelect
                        onChange={(value) =>
                          formik.setFieldValue("series", value)
                        }
                        name="series"
                        label="Product Series"
                        id="series"
                      >
                        <option value="">None</option>

                        <option value="14 series">14 series</option>
                        <option value="13 series">13 series</option>
                        <option value="12 series">12 series</option>
                        <option value="Galaxy Z series">Galaxy Z series</option>
                        <option value="Galaxy S series">Galaxy S series</option>
                      </MySelect>
                    </div>
                    <div className="flex items-center justify-between  gap-10">
                      <MySelect
                        onChange={(value) => formik.setFieldValue("ram", value)}
                        name="ram"
                        label="Ram"
                        id="ram"
                      >
                        <option value="">None</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                      </MySelect>
                      <MyInput
                        name="pin"
                        label="Pin"
                        placeholder="Enter the pin of product"
                      ></MyInput>
                      <MyInput
                        name="memory"
                        label="Memory"
                        placeholder="Enter the memory of product"
                      ></MyInput>
                    </div>
                    <div className="flex items-center justify-between  gap-10">
                      <MyInput
                        name="camFront"
                        label="Front Camera"
                        placeholder="Enter the specifications of front camera"
                      ></MyInput>
                      <MyInput
                        name="camBack"
                        label="Back Camera"
                        placeholder="Enter the specifications of front camera"
                      ></MyInput>
                      <MyInput
                        name="os"
                        label="Os"
                        placeholder="Enter the Os of product"
                      ></MyInput>
                    </div>
                  </div>
                </div>
                <div className="right-content">
                  <div className="sale-box">
                    <h1 className="text-2xl font-bold text-gray-600 mb-6">
                      Sale
                    </h1>
                    <h3 className="mb-4 text-gray-400">
                      Set up the product discount for the customers
                    </h3>
                    <div
                      className="flex items-center justify-between bg-blue-100
                  h-[70px] p-6 rounded-lg mb-5  
                "
                    >
                      <div className="flex items-center gap-7">
                        <span className="p-2 py-1 bg-blue-600 rounded-lg text-white text-2xl material-symbols-outlined">
                          payments
                        </span>
                        <h2 className="font-medium text-blue-500 text-lg">
                          Sale
                        </h2>
                      </div>
                      <input
                        className="btn-sale-option"
                        type="checkbox"
                        name="sale.isOnSale"
                        checked={formik.values.sale.isOnSale}
                        {...formik.getFieldProps("sale.isOnSale")}
                        onClick={() => {
                          setSaleStatus(!saleStatus);
                        }}
                      />
                    </div>
                    <div className="relative">
                      <input
                        disabled={!saleStatus}
                        {...formik.getFieldProps("sale.salePercentage")}
                        name="sale.salePercentage"
                        className={`w-full ${
                          saleStatus ? "bg-white" : "bg-gray-200"
                        }
                  p-3 rounded-lg outline-none border border-black`}
                        type="number"
                        placeholder="Enter the discount percent..."
                      />
                      <span className="material-symbols-outlined icon-percent">
                        percent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5 flex-1">
      <label className="text-sm" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        type="text"
        className="border outline-none border-gray-300 rounded-lg w-full p-4"
        {...props}
        {...field}
      ></input>
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb5">
      <label className="text-sm" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        {...props}
        {...field}
        className="resize-none outline-none p-4 border border-gray-300 rounded-lg w-full h-[200px]"
      />
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MySelect = ({ children, formik, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5 flex-1">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="border outline-none border-gray-300 rounded-lg w-full p-4"
        {...props}
        {...field}
      >
        {children}
      </select>
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default ProductDetailPage;
