"use client"
import React, { useState } from "react"
import Image from "next/image"
import x from "../public/images/simple-icons_x.png"
import avatar2 from "../public/images/avatar-2.webp"
import discord from "../public/images/discord-white-icon.webp"
import telegram from "../public/images/telegram1.png"
import tokenomics from "../public/images/tokenomics.png"
import Link from "next/link"
import { motion } from "framer-motion"

const About = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    const contractAddr = document.querySelector(".contract-addr")

    if (contractAddr) {
      const textToCopy = contractAddr.textContent
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000) // Reset "Copied" after 2 seconds
      })
    }
  }
  return (
    <div className="text-white container  justify-center w-auto  flex flex-col ">
      <motion.h1
        initial={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        className="p-3 font-bold text-3xl md:text-5xl text-yellow-500 justify-center text-center"
      >
        ABOUT AVATAR PROTOCOL
      </motion.h1>
      <div className="flex flex-col md:flex-row  justify-center  gap-5 my-8 ">
        <div className="mx-5 text-left border p-3 rounded-xl max-w-xl border-[#0e0e0e73] md:w-1/2 md:my-32 my-16 mt-8 md:mt-32">
          <p className="text-sm  text-gray-300">
            $AVATAR goes beyond the typical meme-token story. Experience a blend
            of value-generating utilities and community-driven growth.
            <br />
            <br />
            Dive into the avatar world with our self-drop tokens. Picture a
            vibrant ecosystem where every element harmonizes, forming a
            self-sustaining symphony of value. Our goal is to create a dynamic
            world where each component enhances both our token and our cherished
            community of holders.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-3xl md:w-1/2 justify-center items-center flex"
        >
          <Image src={avatar2} className="w-full rounded-2xl" alt="logo" />
        </motion.div>
      </div>

      {/* TOKENOMICS  */}
      <div className=" w-auto flex flex-col md:flex-row-reverse gap-5 my-8 justify-center items-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="p-3 rounded-xl mx-5 w-auto h-auto row-span-5  flex flex-col  leading-loose text-sm justify-center items-center gap-5">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 20 }}
              transition={{ staggerChildren: 1 }}
              className="text-2xl font-bold p-5 text-yellow-500 text-center rounded-full border border-yellow-700"
            >
              Token Address
            </motion.button>
            <motion.div className="w-full row-span-1 items-center justify-center flex ">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 20 }}
                transition={{ staggerChildren: 3 }}
                className="text-2xl text-gray-200"
              >
                Our Official Contract Address
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 20 }}
              transition={{ staggerChildren: 5 }}
              className="rounded-full p-5 border border-yellow-700 contract-addr bg-yellow-700 text-gray-300"
            >
              0xDEBD7cfFf5B3E5dE2123FBB219615ECdd409C863
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="rounded-full p-5 w-[200px] border flex justify-center items-center border-yellow-700 cursor-pointer bg-black hover:bg-gray-900"
              onClick={copyToClipboard}
            >
              <motion.button className="">
                {copied ? "Copied!" : "Copy"}
              </motion.button>
            </motion.div>
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
