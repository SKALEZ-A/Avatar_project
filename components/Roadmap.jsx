import React from "react"
import Image from "next/image"
import phase from "../public/images/avatar_section.png"

const Roadmap = () => {
  return (
    <section className=" my-16">
      {/* <h1 className="  p-5 my-5 text-gray-300 w-fit text-center items-center">
        ROADMAP
      </h1> */}
      <div className="overflow-x-auto border rounded-lg border-[#0e0e0e73]">
        <div className="flex flex-row w-auto">
          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1] " />

                  <div className="text-yellow-500 z-[2]">
                    Phase <br />{" "}
                    <p className="text-3xl text-center font-bold">1</p>
                  </div>
                </div>
              </div>
              <div className="w-full row-span-1 items-center justify-center flex">
                <ul className="w-auto text-gray-300 list-none">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Wallet
                    Launch
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Airdop
                    phase 1
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Social
                    build up
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> 10k
                    Holders
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    DexTools Verified
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="w-full row-span-1 items-center justify-center flex">
                <ul className="w-auto text-gray-300 list-none">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Airdrop Phase 2
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> $AVA
                    Twitter Trending
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> 20k
                    Holders
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Launch
                    Announcement
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Influencer Marketing Campaign
                  </li>
                </ul>
              </div>

              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1] " />

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
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1] " />

                  <div className="text-yellow-500 z-[2]">
                    Phase <br />{" "}
                    <p className="text-3xl text-center font-bold">3</p>
                  </div>
                </div>
              </div>
              <div className="w-full row-span-1 items-center justify-center flex">
                <ul className="w-auto text-gray-300 list-none">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Heavy
                    Project Partnership
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Staking and Farming
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> $AVA
                    Sporting Prediction
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Marketing Trading Bot
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Additional CEX Listing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Large
                    Marketing Campaign
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" w-[20rem] sm:w-[30rem] items-center ">
            <div className="grid grid-rows-2">
              <div className="w-full row-span-1 items-center justify-center flex">
                <ul className="w-auto text-gray-300 list-none">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Coingecko and Coinmarketcap Listing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> Buy
                    Contest
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> $1000
                    Thread Contest
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span> CEX
                    Listing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">&#8226;</span>{" "}
                    Website and Logo Rebranding
                  </li>
                </ul>
              </div>

              <div className="flex row-span-1 h-[12rem] flex-items justify-center m-0  bg-center bg-cover custom-img2 relative items-center ">
                <div className=" flex justify-center items-center">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1] " />

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
  )
}

export default Roadmap
