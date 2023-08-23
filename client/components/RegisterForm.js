"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { errorsConversion } from "@/utils/errorsHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { useAuth } from "@/context/authContext";

const RegisterForm = () => {
  const { globalState } = useAuth();
  const { push } = useRouter();
  const [state, setState] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        ...state,
      });
      setLoading(false);
      push("/auth/login");
    } catch (error) {
      setLoading(false);

      const response = errorsConversion(error?.response?.data?.errors);
      setErrors(response);
    }
  };
  useEffect(() => {
    if (globalState.token) {
      push("/");
    }
  }, [globalState]);
  console.log(globalState);
  if (globalState.loader) {
    return <h1>Loading..........</h1>;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-[173px]">
        <h2 className="text-black text-[30px] font-bold leading-normal capitalize">
          Account signup
        </h2>
        <p className="text-[#8692A6] mt-[10px] text-lg leading-[28px]">
          {" "}
          If you are already a member you can login with your email address and
          password.
        </p>
        <form className="mt-10 w-full" onSubmit={register}>
          <div className="w-full">
            <label
              htmlFor="name"
              className="text-[#696F79] text-base font-medium leading-normal capitalize mb-2 block"
            >
              name
            </label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={onChange}
              id="name"
              className={`w-full h-[64px] px-3 rounded-[6px] border ${
                errors.name ? "border-rose-600" : "border-[#8692A6]"
              } outline-none`}
            />
            {errors.name && (
              <span className="text-rose-600">{errors.name}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <label
              htmlFor="email"
              className="text-[#696F79] text-base font-medium leading-normal capitalize mb-2 block"
            >
              username
            </label>
            <input
              type="text"
              name="userName"
              value={state.userName}
              onChange={onChange}
              id="username"
              className={`w-full h-[64px] px-3 rounded-[6px] border ${
                errors.userName ? "border-rose-600" : "border-[#8692A6]"
              } outline-none`}
            />
            {errors.userName && (
              <span className="text-rose-600">{errors.userName}</span>
            )}
          </div>
          <div className="w-full mt-4">
            <label
              htmlFor="password"
              className="text-[#696F79] text-base font-medium leading-normal capitalize mb-2 block"
            >
              create password
            </label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={onChange}
              id="password"
              className={`w-full h-[64px] px-3 rounded-[6px] border ${
                errors.password ? "border-rose-600" : "border-[#8692A6]"
              } outline-none`}
            />
            {errors.password && (
              <span className="text-rose-600">{errors.password}</span>
            )}
          </div>
          {loading ? (
            <Loader />
          ) : (
            <button className="mt-[40px] w-full h-[64px] rounded-[6px] bg-[#2C73EB] text-white text-center text-base font-medium leading-normal capitalize">
              register account
            </button>
          )}

          <Link
            href={"/auth/login"}
            className="block mt-3 text-base font-medium text-black"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
