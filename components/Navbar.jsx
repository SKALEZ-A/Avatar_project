"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/avatar-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav className="fixed left-0 top-0 w-full z-10 ease-in duration-300  bg-[#0e0e0e73]">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <Image src={logo} className="w-32 cursor-pointer" alt="logo" />
        </Link>
        <ul className="sm:flex hidden">
          <li className="p-4">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-4">
            <Link href={"/"}>Roadmap</Link>
          </li>
          <li className="p-4">
            <Link href={"/#whitepaper"}>Whitepaper</Link>
          </li>
          <li className="p-4">
            <Link href={"/"}>Tokenomics</Link>
          </li>
          <li className="p-4">
            <Link href={"/"}>live Charts</Link>
          </li>
        </ul>

        {/* mobile button  */}

        <div
          className="block sm:hidden z-[9999] text-white "
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile menu  */}
        <div
          className={
            nav
              ? "top-0 right-0 bottom-0 left-0 absolute flex justify-center items-center w-full h-screen bg-black sm:hidden text-center ease-in duration-300 z-[999]"
              : "top-0 right-0 bottom-0 left-[-100%] absolute flex justify-center items-center w-full h-screen bg-black sm:hidden text-center ease-in duration-300 z-[999]"
          }
        >
          <ul className="">
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href={"/"}>Roadmap</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href={"/#whitepaper"}>Whitepaper</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href={"/"}>Tokenomics</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href={"/"}>Live Charts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
