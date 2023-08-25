"use client";
import { GrClose } from "react-icons/gr";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import Loader from "./Loader";
import { toast } from "react-hot-toast";
const Modal = ({ close }) => {
  const {
    globalState: { token },
  } = useAuth();
  console.log(token);
  const [file, setFile] = useState(null);
  const [state, setState] = useState({
    image: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const handleChange = async (img) => {
    const file = new FormData();
    file.append("file", img);
    file.append("upload_preset", "fxperlab");
    file.append("cloud_name", "dj80llh31");
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dj80llh31/image/upload",
        file
      );
      setLoading(false);
      setState({ ...state, image: data.secure_url });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  const createPost = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/create-post",
        {
          body: state.body,
          postImage: state.image,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setFormLoading(false);
      alert(data.msg);
      close();
      console.log(data);
    } catch (error) {
      setFormLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center h-full ">
      <div className="p-3 flex justify-center w-full">
        <div className="bg-white px-4 py-9 w-full md:w-4/12 rounded-md relative">
          <GrClose
            className="absolute top-4 right-4 cursor-pointer text-gray-500"
            onClick={close}
          />
          <form className="w-full mt-4" onSubmit={createPost}>
            {loading ? (
              <TailSpin
                height="50"
                width="50"
                color="blue"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : state.image !== "" ? (
              <div className="w-full h-[150px] relative">
                <Image
                  src={state.image}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={["jpg", "jpeg", "png"]}
              />
            )}

            <div className="w-full mt-3">
              <textarea
                name=""
                value={state.body}
                onChange={(e) => setState({ ...state, body: e.target.value })}
                id=""
                cols="30"
                rows="6"
                className="border w-full outline-none border-gray-500 rounded-md p-3"
              ></textarea>
            </div>
            {formLoading ? (
              <Loader />
            ) : (
              <input
                type="submit"
                value="create post"
                className="mt-4 block w-full bg-blue-600 rounded-md py-3 px-3 text-white capitalize font-medium cursor-pointer"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
