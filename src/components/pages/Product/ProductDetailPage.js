import React, { Fragment, useEffect, useRef, useState } from "react";

import "../../sass/productDetailPages.scss";
import { Form, Formik, useField } from "formik";
import ImageInput from "../Product/ImageInput";

const ProductDetailPage = (props) => {
  const [content, setContent] = useState("Iphone 14 Pro Max");
  const [width, setWidth] = useState(0);

  const span = useRef();

  useEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [content]);

  const changeHandler = (evt) => {
    setContent(evt.target.value);
  };
  return (
    <Formik initialValues={props}>
      {(formik) => (
        <Form className="productDetail">
          <div className="top-content">
            <div className="item-name">
              <wrapper is="custom">
                <span id="hide" ref={span}>
                  {content}
                </span>
                <input
                  defaultValue="Iphone 14 Pro Max"
                  type="text"
                  style={{ width }}
                  autoFocus
                  onChange={changeHandler}
                />
              </wrapper>
              <span class="material-symbols-outlined">reply</span>
            </div>
            <button type="Submit">Publish</button>
          </div>
          <div className="middle-content">
            <div className="left-content">
              <div className="image-info">
                <ImageInput formik={formik}></ImageInput>
              </div>
              <div className="general-info">
                <h1 className="text-2xl font-bold text-gray-600 mb-5">
                  General Info
                </h1>
                <div className="flex items-center justify-between gap-10">
                  <MyInput
                    name="name"
                    label="Product Name"
                    id="name"
                    defaultValue="Iphone 14 Pro Max"
                  ></MyInput>
                  <MySelect
                    onChange={(value) => formik.setFieldValue("color", value)}
                    value={formik.values.series}
                    name="color"
                    label="Color"
                    id="color"
                  >
                    <option value="">Select color options...</option>
                    <option value="Silver">Sliver</option>
                    <option value="Gold">Gold</option>
                    <option value="Red">Red</option>
                    <option value="Purple">Purple</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                  </MySelect>
                </div>
                <MyTextArea
                  name="description"
                  label="Description"
                  id="description"
                  defaultValue="Iphone 14 Pro Max"
                ></MyTextArea>
                <div className="flex items-center mt-5 justify-between gap-10">
                  <MyInput name="price" label="Price" id="price"></MyInput>
                  <MyInput
                    name="quantity"
                    label="Quantity"
                    id="quantity"
                  ></MyInput>
                  <MyInput name="sold" label="Sold" id="sold"></MyInput>
                </div>
              </div>
              <div className="general-info">
                <h1 className="text-2xl font-bold text-gray-600 mb-5">
                  Properties
                </h1>
                <div className="flex items-center justify-between  gap-10">
                  <MySelect
                    onChange={(value) => formik.setFieldValue("brand", value)}
                    value={formik.values.series}
                    name="brand"
                    label="Product Brand"
                    id="brand"
                  >
                    <option value="">Select brand options...</option>
                    <option value="America">America</option>
                    <option value="China">China</option>
                    <option value="HongKong">HongKong</option>
                  </MySelect>
                  <MySelect
                    onChange={(value) =>
                      formik.setFieldValue("category", value)
                    }
                    value={formik.values.series}
                    name="category"
                    label="Category"
                    id="category"
                  >
                    <option value="">Select category options...</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Accessories">Accessories</option>
                  </MySelect>
                  <MySelect
                    onChange={(value) => formik.setFieldValue("series", value)}
                    value={formik.values.series}
                    name="series"
                    label="Product Series"
                    id="series"
                  >
                    <option value="">Select series...</option>
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
                    value={formik.values.series}
                    name="ram"
                    label="Ram"
                    id="ram"
                  >
                    <option value="">Select ram options...</option>
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
                <h1 className="text-2xl font-bold text-gray-600 mb-6">Sale</h1>
                <h3 className="mb-4 text-gray-400">
                  Set up the product discount for the customers
                </h3>
                <div
                  className="flex items-center justify-between bg-blue-100
                  h-[70px] p-6 rounded-lg mb-5  
                "
                >
                  <div className="flex items-center gap-7">
                    <span class="p-2 py-1 bg-blue-600 rounded-lg text-white text-2xl material-symbols-outlined">
                      payments
                    </span>
                    <h2 className="font-medium text-blue-500 text-lg">Sale</h2>
                  </div>
                  <input
                    className="btn-sale-option"
                    type="checkbox"
                    name="sale-option"
                  />
                </div>
                <input
                  className="w-full bg-gray-200
                  p-3 rounded-lg outline-none"
                  type="text"
                  placeholder="Enter the discount percent..."
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
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
const MySelect = ({ children, formik, label, value, ...props }) => {
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
