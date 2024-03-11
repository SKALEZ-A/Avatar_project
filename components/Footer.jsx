import Image from "next/image"
import React from "react"
import x from "../public/images/simple-icons_x.png"
// import discord from "../public/images/social-discord.svg"
import telegram from "../public/images/telegram1.png"

const Footer = () => {
  return (
    <footer className="w-full lg:relative px-4 py-9 md:px-16 ">
      <div className="flex justify-between items-center">
        <div className="w-[63px] font-normal text-[#f9f9f9] text-2xl">
          <p>{}</p>
        </div>
        <nav className="hidden lg:block lg:w-[770px] h-[19px]  ">
          <ul
            role="list"
            className="flex text-[#f9f9f9] opacity-80 justify-between text-base font-normal"
          >
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Whitepaper</li>
            <li className="cursor-pointer">Lite Paper</li>
          </ul>
        </nav>
        <div className="gap-[19px] flex h-[25px] w-[124px] justify-between">
          <Image height={25} width={27.11} src={x} alt="social-icon" />
          <Image height={25} width={25.94} src={telegram} alt="social-icon" />
          {/* <Image height={25} width={31.74} src={discord} alt="social-icon" /> */}
        </div>
      </div>
      <div className="container p-3 flex justify-center items-center">
        <p className="text-white text-center">2024 Avatar Protocol.</p>
      </div>
      <nav className="block lg:hidden mt-10">
        <ul
          role="list"
          className="flex flex-col gap-6 text-[#f9f9f9] opacity-60 justify-between text-sm leading-[16.8px] font-normal"
        >
          <span className="flex items-center justify-between">
            <li className="cursor-pointer">Privacy Policy</li>
          </span>
          <span className="flex items-center justify-around w-3/4 mx-auto">
            <li className="cursor-pointer">Whitepaper</li>
            <li className="cursor-pointer">Lite Paper</li>
          </span>
          <div className="container p-3 flex justify-center items-center">
            <p className="text-white text-center">2024 Avatar Protocol.</p>
          </div>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
