import React, { Fragment, useEffect, useRef } from "react";
import { Formik, Form, Field, useField } from "formik";
import uploadImage from "../../../image/uploadImage.png";
import { useState } from "react";
import PreviewImages from "../../tools/PreviewImages";
import { request } from "../../utils/request";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const AddProductPage = () => {
  const uploadRef = useRef();
  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState("");
  useEffect(() => {
    return () => {
      imageUpload && URL.revokeObjectURL(imageUpload);
    };
  }, [imageUpload]);
  const handlePostData = (values) => {
    request
      .post("/products/", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="backForward flex items-center gap-3 mb-5 cursor-pointer"
      >
        <span class="material-symbols-outlined text-lg text-blue-300">
          west
        </span>
        <span className="text-lg text-blue-300">Products</span>
      </div>
      <Formik
        initialValues={{
          name: "",
          price: "",
          description: "",
          quantity: "",
          category: "",
          images: "",
          brand: "",
          color: "",
          ram: 0,
          memory: 0,
          camFront: "",
          camBack: "",
          series: "",
          os: "",
          pin: 0,
          sale: {
            isOnSale: false,
            salePercentage: 0,
          },
        }}
        onSubmit={(values, actions) => {
          handlePostData(values);

          actions.resetForm({
            name: "",
            price: "",
            description: "",
            quantity: "",
            series: "",
            images: "",
            camFront: "",
            camBack: "",
            category: "",
            brand: "",
            color: "",
            ram: 0,
            memory: 0,
            pin: 0,
            os: "",
            sale: {
              isOnSale: false,
              salePercentage: 0,
            },
          });
          setImageUpload("");
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
          sold: Yup.number()
            .required("Required")
            .positive("Must be a positive number"),
          color: Yup.string().required("Required"),
          brand: Yup.string().required("Required"),
          category: Yup.string().required("Required"),
        })}
      >
        {(formik) => {
          return (
            <Form
              autoComplete="on"
              className="p-10 mb-10 h-full  mx-auto w-full max-w-[1484.7px] addProduct-form"
            >
              <div className="grid grid-cols-2 gap-10">
                <div className="mainContent-product">
                  <MyInput
                    name="name"
                    label="Product Name"
                    placeholder="Enter product name..."
                  ></MyInput>
                  <div className="flex flex-col gap-2 mb-5 ">
                    <label htmlFor="image">Product Image</label>
                    <input
                      ref={uploadRef}
                      hidden
                      name="images"
                      id="images"
                      type="file"
                      className="border border-gray-100 rounded-lg w-full max-w-[500px] p-4"
                      onChange={(event) => {
                        formik.setFieldValue("images", event.target.files[0]);
                        setImageUpload(event.target.files[0]);
                      }}
                    ></input>
                    <div
                      onClick={() => {
                        if (!imageUpload) {
                          uploadRef.current.click();
                        }
                      }}
                      className={`upload-container w-full h-[250px] border-2 border-dashed ${
                        imageUpload ? "" : "cursor-pointer"
                      }`}
                    >
                      {imageUpload ? (
                        <div className="relative">
                          <PreviewImages file={imageUpload}></PreviewImages>
                          <div
                            onClick={() => {
                              setImageUpload("");
                            }}
                            className="removeImage"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-[30px] h-[30px]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <Fragment>
                          <div className="w-[64px] h-[64px]">
                            <img
                              src={uploadImage}
                              className="w-full h-full overflow-hidden object-cover"
                              alt=""
                            />
                          </div>
                          <h3 className="text-blue-500 font-medium">
                            Click here to upload product image
                          </h3>
                        </Fragment>
                      )}
                    </div>
                  </div>
                  <MyInput
                    name="price"
                    label="Product Price"
                    placeholder="Enter product price..."
                  ></MyInput>
                  <MyInput
                    name="quantity"
                    label="Quantity"
                    placeholder="Enter quantity of product..."
                  ></MyInput>

                  <MyTextArea
                    label="Description Product"
                    name="description"
                    id="description"
                    placeholder="Enter description of the product..."
                  ></MyTextArea>
                </div>
                <div className="optionContent-product">
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
                    name="camFront"
                    label="Front Camera"
                    placeholder="Enter the specifications of front camera"
                  ></MyInput>
                  <MyInput
                    name="camBack"
                    label="Back Camera"
                    placeholder="Enter the specifications of front camera"
                  ></MyInput>
                  <div className="flex items-center justify-between gap-5">
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
                    <MyInput
                      name="os"
                      label="Os"
                      placeholder="Example:iOS 16"
                    ></MyInput>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="mt-10 p-4 bg-blue-500 w-full max-w-[300px] text-white rounded-lg"
                >
                  Add Product
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5 flex-1">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
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
const MySelect = ({ children, formik, label, value, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="border border-gray-300 rounded-lg w-full max-w-[600px] p-4"
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
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        {...props}
        {...field}
        className="resize-none p-4 border border-gray-300 rounded-lg w-full max-w-[600px] h-[200px]"
      />
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default AddProductPage;
