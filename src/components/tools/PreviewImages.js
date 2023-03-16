import React, { Fragment, useState } from "react";

const PreviewImages = ({ file }) => {
  const [preview, setPreview] = useState("");
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <Fragment>
      {preview && (
        <div className="w-[250px] h-[250px] p-2 border-yellow-300 border-4 rounded-lg">
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-fit overflow-hidden rounded-lg"
          />
        </div>
      )}
    </Fragment>
  );
};

export default PreviewImages;
