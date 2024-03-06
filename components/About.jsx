import React from "react"
import Image from "next/image"
import x from "../public/images/simple-icons_x.png"
import avatar2 from "../public/images/avatar-2.webp"
import discord from "../public/images/discord-white-icon.webp"
import telegram from "../public/images/telegram1.png"
import tokenomics from "../public/images/tokenomics.png"
import Link from "next/link"

const About = () => {
  return (
    <div className="text-white container  justify-center w-auto  flex flex-col ">
      <h1 className="p-5 font-bold text-2xl md:text-4xl text-yellow-500 justify-center text-center">
        ABOUT AVATAR PROTOCOL
      </h1>
      <div className="flex flex-col md:flex-row  justify-center  gap-5 my-8 sm:my-16">
        <div className="mx-5 text-left border p-3 rounded-xl max-w-xl border-[#0e0e0e73] md:w-1/2">
          <p className="text-sm  text-gray-300">
            For over a decade, the fear of the unknown has had a negative effect
            on people's growth and instinct. The fear of rejection, or mission
            evolves around adoption of fear.
            <br />
            <br /> Its our greatest weapon, preparation and training for
            evolution of technology in your own world as your own $Avatar
            exploring every niche of web3 and opportunities sorrounding it.
            <br />
            <br /> Giving every person a chance to attain their own $Avatar the
            way they want to attain independence and freedom, providing access
            and solutions.
          </p>
        </div>
        <div className="rounded-3xl md:w-1/2 justify-center items-center">
          <Image src={avatar2} className="w-full rounded-2xl" alt="logo" />
        </div>
      </div>

      {/* TOKENOMICS  */}
      <div className=" w-auto flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2">
          <div className=" border border-[#0e0e0e73] p-3 rounded-xl mx-5 w-auto h-auto row-span-5  flex items-start flex-col justify-center leading-loose text-sm">
            <span className="text-3xl font-bold p-5 text-yellow-500">
              Tokenomics
            </span>
            <div className="w-full row-span-1 items-center justify-center flex">
              <ul className="w-auto text-white list-disc">
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                  0xdB1D576096e0172B7906E32efc7246AB5eD071b4
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                  <h1>Token Name: AVATAR PROTOCOL</h1>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span> Token
                  Symbol: $AVATAR
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span> Decimal:
                  18
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span> Total
                  supply of 100,000,000 tokens
                </li>
              </ul>
            </div>
          </div>
          <div className=" border border-[#0e0e0e73] p-3 rounded-xl mx-5 w-auto row-span-2">
            <h1 className="p-5 font-bold text-xl text-yellow-500 text-left">
              Follow our socials:
            </h1>
            <div className="flex flex-row w-auto items-center gap-5">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/+9GMQ6B3XyVI2NDdk"
                className="inline-flex justify-center gap-x-0 "
              >
                <span className="flex gap-3 items-center">
                  Twitter
                  <Image
                    src={x}
                    className="w-10 h-10 rounded-full border p-1"
                  />
                </span>
              </Link>

              <span className="flex gap-3 items-center">
                Telegram
                <Image
                  src={telegram}
                  className="w-10 h-10 rounded-full border p-1"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div>
            <Image src={tokenomics} className="w-full" alt="logo" />
          </div>
        </div>
      </div>
      {/* 
      <div className="mx-auto my-16" id="whitepaper">
        <button className="p-5 bg-[#0e0e0e73] text-white rounded-lg">
          WHITEPAPER
        </button>
        <Image src={logo} className="w-[32]" alt="logo" />
      </div> */}
    </div>
  )
}

export default About
