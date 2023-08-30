"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useAuth } from "@/context/authContext";

const HomeComponent = () => {
  const [state, setState] = useState(false);
  const { globalState } = useAuth();
  const open = () => {
    setState(true);
  };
  const close = () => {
    setState(false);
  };
  return (
    <>
      <div className="flex justify-center mt-[22px]">
        <div
          className="w-full md:w-[622px] bg-white py-[18px] px-4 text-center cursor-pointer rounded-[8px]"
          onClick={open}
        >
          <span className="text-[#788292] text-[15px]">
            What’s on you mind,{" "}
            <span className="capitalize font-medium">
              {globalState?.user?.name}
            </span>
          </span>
        </div>
      </div>
      {state && <Modal close={close} />}
    </>
  );
};

export default HomeComponent;
