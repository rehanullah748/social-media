"use client";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const { globalState } = useAuth();
  console.log("nav: ", globalState);
  const toggle = () => {
    setMenu(!menu);
  };
  return (
    <nav className="relative w-full h-[70px] flex items-center justify-between bg-white shadow px-6">
      <Link href="/" className="w-10 h-10 relative block">
        <Image
          src="/images/logo.svg"
          fill
          className="w-full h-full object-cover"
          alt="logo"
        />
      </Link>
      <ul className="hidden md:flex items-center space-x-5">
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            notification
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            watch
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            marketplace
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            groups
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            messenger
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[13px] font-medium capitalize text-[#788292]"
          >
            live
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-[17px]">
        <div className="w-[19px] h-[19px] relative">
          <Image
            src="/images/search.svg"
            fill
            alt="search"
            className="w-full h-full object-cover"
          />
        </div>
        {globalState.token ? (
          globalState?.user?.image ? (
            <div className="w-10 h-10 relative">
              <Image
                src={globalState?.user?.image}
                fill
                alt="search"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <span className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white text-xl font-medium cursor-pointer">
              {globalState?.user?.name[0]}
            </span>
          )
        ) : (
          ""
        )}
        {menu ? (
          <GrClose
            className="block md:hidden cursor-pointer"
            onClick={toggle}
          />
        ) : (
          <GiHamburgerMenu
            className="block md:hidden cursor-pointer"
            onClick={toggle}
          />
        )}
      </div>
      {/* mobile links */}
      {menu ? (
        <ul className="flex md:hidden flex-col absolute top-full left-0 w-full bg-blue-50">
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              notification
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              watch
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              marketplace
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              groups
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              messenger
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-[13px] font-medium capitalize text-[#788292] hover:bg-white block w-full p-3 transition-all duration-300 hover:font-semibold hover:pl-5"
            >
              live
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Nav;
