"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const HomeComponent = () => {
  const { globalState, setGlobalState } = useAuth();
  const { push } = useRouter();
  const [state, setState] = useState(false);
  const open = () => {
    setState(true);
  };
  const close = () => {
    setState(false);
  };
  useEffect(() => {
    if (!globalState.token) {
      push("/auth/login");
    }
  }, [globalState]);
  useEffect(() => {
    console.log("loader false run");
    setGlobalState({ ...globalState, loader: false });
  }, []);
  console.log(globalState);
  if (globalState.loader) {
    return <h1>Loading............</h1>;
  }
  return (
    <>
      <div className="flex justify-center mt-[22px]">
        <div
          className="w-full md:w-[622px] bg-white py-[18px] px-4 text-center cursor-pointer rounded-[8px]"
          onClick={open}
        >
          <span className="text-[#788292] text-[15px]">
            What’s on you mind, Paul?
          </span>
        </div>
      </div>
      {state && <Modal close={close} />}
    </>
  );
};

export default HomeComponent;
