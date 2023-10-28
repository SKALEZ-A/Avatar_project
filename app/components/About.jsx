import React from "react";
import Image from "next/image";
import logo from "../../public/images/avatar_section.png";
import tokenomics from "../../public/images/avatar_tokenomics.png";

const About = () => {
  return (
    <div className="text-white container flex justify-center items-center flex-col ">
      <div className="max-w-xl justify-center items-center my-32 m-auto flex flex-col">
        <span className="text-3xl font-bold p-5 text-black">CONTRACT</span>
        <p>0x834hf934f03h8f934h9f398038fh40h343839bhb</p>
        <h1>Token Name: AVATAR PROTOCOL</h1>
        <p>Token Symbol: $AVA</p>
        <p>Decimal: 18</p>
      </div>

      <div className="mx-5 flex justify-center items-center max-w-xl flex-col">
        <h1 className="p-5 font-bold text-3xl text-black items-center">
          ABOUT AVATAR PROTOCOL
        </h1>
        <p>
          For over a decade, the fear of the unknown has had a negative effect
          on people's growth and instinct. The fear of rejection, our mission
          evolves around adoption of fear, making it your greatest weapon,
          preparation and training for evolution of technology in your own world
          as your own $Avatar exploring every niche of web3 and opportunities
          sorrounding it. Giving every person a chance to attain their own
          $Avatar the way they want to attain independence and freedom,
          providing access and solutions.
        </p>
      </div>

      <div className="w-auto m-auto" id="whitepaper">
        <button className="p-5 bg-black text-white rounded-lg">
          WHITEPAPER
        </button>
        <Image src={logo} className="w-[32]" />
      </div>

      {/* TOKENOMICS  */}
      <div id="tokenomics">
        <span>TOKENOMICS</span>
        <p>TAX</p>
        <h1>There is a 5% tax on buy and sell of the token</h1>
        <Image src={tokenomics} className="w-[16]" />
        <h1>SUPPLY</h1>
        <p>There will be a total of 1,000,000,000 Tokens in the supply.</p>
      </div>
    </div>
  );
};

export default About;
