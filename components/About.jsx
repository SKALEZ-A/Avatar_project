import React from "react"
import Image from "next/image"
import x from "../public/images/simple-icons_x.png"
import discord from "../public/images/discord-white-icon.webp"
import Link from "next/link"

const About = () => {
  return (
    <div className="text-white container  justify-center w-auto  flex flex-col ">
      <div className="grid  justify-center  gap-5 sm:grid-cols-2 ">
        <div className="mx-5 text-left border p-3 rounded-xl max-w-xl border-[#0e0e0e73]">
          <h1 className="p-5 font-bold text-2xl text-yellow-500 text-left">
            ABOUT AVATAR PROTOCOL
          </h1>
          <p className="text-sm">
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

        {/* TOKENOMICS  */}
        <div className=" gap-5  grid grid-row-7">
          <div className="max-w-xl border border-[#0e0e0e73] p-3 rounded-xl mx-5 w-auto h-auto row-span-5  flex items-start flex-col justify-center leading-loose text-sm">
            <span className="text-3xl font-bold p-5 text-yellow-500">
              Tokenomics
            </span>
            <div className="w-full row-span-1 items-center justify-center flex">
              <ul className="w-auto text-white list-disc">
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                  0x834hf934f03h8f934h9f398038fh40h343839bhb
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                  <h1>Token Name: AVATAR PROTOCOL</h1>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span> Token
                  Symbol: $AVA
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span> Decimal:
                  18
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-yellow-500">&#8226;</span> Total
                  supply of 1,000,000,000 tokens
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-xl border border-[#0e0e0e73] p-3 rounded-xl mx-5 w-auto row-span-2">
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
                Discord
                <Image
                  src={discord}
                  className="w-10 h-10 rounded-full border p-1"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-16" id="whitepaper">
        <button className="p-5 bg-[#0e0e0e73] text-white rounded-lg">
          WHITEPAPER
        </button>
        {/* <Image src={logo} className="w-[32]" alt="logo" /> */}
      </div>
    </div>
  )
}

export default About
