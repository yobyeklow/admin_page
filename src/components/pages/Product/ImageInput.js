import React, { Fragment, useRef, useState } from "react";
import PreviewImages from "../../tools/PreviewImages";
import uploadImage from "../../../image/uploadImage.png";
const ImageInput = ({ formik, imagesProps = "" }) => {
  const [imageUpload, setImageUpload] = useState("");
  const [imageOrginal, setImageOrginal] = useState(imagesProps);
  const uploadRef = useRef();
  return (
    <div className="image-product">
      <div className="flex flex-col gap-2 mb-5 ">
        {imageOrginal ? (
          <div className="upload-container w-full h-[250px] border-2 border-dashed">
            <div className="relative">
              <img
                src={imageOrginal}
                alt=""
                className="w-[250px] h-[250px] p-2 border-yellow-300 border-4 rounded-lg"
              />
              <div
                onClick={() => {
                  setImageOrginal("");
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
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
