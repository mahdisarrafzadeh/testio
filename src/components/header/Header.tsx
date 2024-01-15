import React from "react";
import Image from "next/image";

const string = {
  name: "بردیا ادیبی",
};

const Header: React.FC = () => {
  return (
    <header className="bg-white px-[60px] flex justify-between items-center h-[72px] shrink-0">
      <section className="flex flex-row px-[20px] py-2 border-solid border-[1px] rounded-[50px] cursor-pointer ">
        <span className="text-[#757575] font-normal pr-1">{string.name}</span>
        <Image
          src="/account_circle.svg"
          alt="Testio Logo"
          width={24}
          height={24}
          priority
        />
      </section>
      <Image
        src="/logo.svg"
        alt="Testio Logo"
        width={100}
        height={24}
        priority
      />
    </header>
  );
};

export default Header;