import React from "react";
import Image from "next/image";
import phase from "../public/images/avatar_section.png";

const Roadmap = () => {
  return (
    <section className=" my-16">
      {/* <h1 className="  p-5 my-5 text-white w-fit text-center items-center">
        ROADMAP
      </h1> */}
      <div className="overflow-x-auto border rounded-lg">
        <div className="flex flex-row min-w-max">
          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />

                  <div className="text-yellow-500 z-[2]">
                    Phase <br />{" "}
                    <p className="text-3xl text-center font-bold">1</p>
                  </div>
                </div>
              </div>
              <div className="w-full  row-span-1 items-center justify-center flex">
                <ul className=" w-auto text-white">
                  <li>Wallet Launch</li>
                  <li>Airdop phase 1</li>
                  <li>Social build up</li>
                  <li>10k Holders</li>
                  <li>DexTools Verified</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="w-full  row-span-1 items-center justify-center flex">
                <ul className=" w-auto text-white">
                  <li>Airdrop Phase 2</li>
                  <li>$AVA Twitter Trending</li>
                  <li>20k Holders</li>
                  <li>Launch Announcement</li>
                  <li>Influencer Marketing Campaign</li>
                </ul>
              </div>
              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />

                  <div className="text-yellow-500 z-[2]">
                    Phase <br />{" "}
                    <p className="text-3xl text-center font-bold">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />

                  <div className="text-yellow-500 z-[2]">
                    Phase <br />{" "}
                    <p className="text-3xl text-center font-bold">3</p>
                  </div>
                </div>
              </div>
              <div className="w-full  row-span-1 items-center justify-center flex">
                <ul className=" w-auto text-white">
                  <li>Heavy Project Partnership</li>
                  <li>Staking and Farming</li>
                  <li>$AVA Sporting Prediction</li>
                  <li>Marketing Trading Bot</li>
                  <li>Additional CEX Listing</li>
                  <li>Large Marketing Campaign</li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="w-full  row-span-1 items-center justify-center flex">
                <ul className=" w-auto text-white">
                  <li>Coingecko and Coinmarketcap Listing </li>
                  <li>Buy Contest</li>
                  <li>$1000 Thread Contest</li>
                  <li>CEX Listing</li>
                  <li>Website and Logo Rebranding</li>
                </ul>
              </div>

              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />

                  <div className="text-yellow-500 z-[2]">
                    Phase <br />{" "}
                    <p className="text-3xl text-center font-bold">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
