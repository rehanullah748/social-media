import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full h-[70px] flex items-center justify-between bg-white shadow px-6">
      <Link href="/" className="w-10 h-10 relative block">
        <Image
          src="/images/logo.svg"
          fill
          className="w-full h-full object-cover"
          alt="logo"
        />
      </Link>
      <ul className="flex items-center space-x-5">
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
        <div className="w-10 h-10 relative">
          <Image
            src="/images/user.svg"
            fill
            alt="search"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
