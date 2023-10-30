import React from "react";
import Image from "next/image";
import logo from "../../public/images/avatar_section.png";
import tokenomics from "../../public/images/avatar_tokenomics.png";

const About = () => {
  return (
    <div className="text-white container  justify-center w-auto  flex flex-col ">
      <div className="grid  justify-center  gap-5 sm:grid-cols-2 ">
        <div className="mx-5 text-left border p-3 rounded-xl max-w-xl">
          <h1 className="p-5 font-bold text-xl text-yellow-500 text-left">
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
          <div className="max-w-xl border p-3 rounded-xl mx-5 w-auto h-auto row-span-5  flex items-start flex-col justify-center leading-loose text-sm">
            <span className="text-3xl font-bold p-5 text-yellow-500">
              Tokenomics
            </span>
            <p>0x834hf934f03h8f934h9f398038fh40h343839bhb</p>
            <h1>Token Name: AVATAR PROTOCOL</h1>
            <p>Token Symbol: $AVA</p>
            <p>Decimal: 18</p>
            <p>
              <span>**</span>There is a 5% tax on every buy and sell of the
              token
            </p>
            <p>
              <span>**</span>There will be a total of 1,000,000,000 tokens in
              the supply
            </p>
          </div>
          <div className="max-w-xl border p-3 rounded-xl mx-5 w-auto row-span-2">
            <p>Follow our socials:</p>
            <div>
              <span>Twitter</span>
              <span>X</span>
              <span>Discord</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-16" id="whitepaper">
        <button className="p-5 bg-black text-white rounded-lg">
          WHITEPAPER
        </button>
        {/* <Image src={logo} className="w-[32]" alt="logo" /> */}
      </div>
    </div>
  );
};

export default About;
