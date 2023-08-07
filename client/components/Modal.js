"use client";
import { GrClose } from "react-icons/gr";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
const Modal = ({ close }) => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    console.log(file);
    setFile(file);
  };
  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center h-full ">
      <div className="p-3 flex justify-center w-full">
        <div className="bg-white px-4 py-9 w-full md:w-4/12 rounded-md relative">
          <GrClose
            className="absolute top-4 right-4 cursor-pointer text-gray-500"
            onClick={close}
          />
          <form className="w-full mt-4">
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={["jpg", "jpeg", "png"]}
            />
            <div className="w-full mt-3">
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                className="border w-full outline-none border-gray-500 rounded-md p-3"
              ></textarea>
            </div>
            <input
              type="submit"
              value="create post"
              className="mt-4 block w-full bg-blue-600 rounded-md py-3 px-3 text-white capitalize font-medium cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
