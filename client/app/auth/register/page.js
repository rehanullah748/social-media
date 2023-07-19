import Left from "@/components/Left";

const page = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 h-screen">
      <Left />
      <div className="flex items-center justify-center h-screen">
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-[173px]">
          <h2 className="text-black text-[30px] font-bold leading-normal capitalize">
            Account signup
          </h2>
          <p className="text-[#8692A6] mt-[10px] text-lg leading-[28px]">
            {" "}
            If you are already a member you can login with your email address
            and password.
          </p>
          <form className="mt-10 w-full">
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-[#696F79] text-base font-medium leading-normal capitalize mb-[14px] block"
              >
                name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="w-full h-[64px] px-3 rounded-[6px] border border-[#8692A6] outline-none"
              />
            </div>
            <div className="w-full mt-4">
              <label
                htmlFor="email"
                className="text-[#696F79] text-base font-medium leading-normal capitalize mb-[14px] block"
              >
                email
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="w-full h-[64px] px-3 rounded-[6px] border border-[#8692A6] outline-none"
              />
            </div>
            <div className="w-full mt-4">
              <label
                htmlFor="password"
                className="text-[#696F79] text-base font-medium leading-normal capitalize mb-[14px] block"
              >
                create password
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="w-full h-[64px] px-3 rounded-[6px] border border-[#8692A6] outline-none"
              />
            </div>
            <button className="mt-[40px] w-full h-[64px] rounded-[6px] bg-[#2C73EB] text-white text-center text-base font-medium leading-normal capitalize">
              register account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
