"use client"
import React from "react"
import Image from "next/image"
import banner from "../public/images/avatarmain.png"

import { motion } from "framer-motion"
import Link from "next/link"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-350%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
}

const Hero = () => {
  return (
    <section className="lg:pt-8 flex flex-items justify-center md:h-screen mb-12 bg-fixed bg-center bg-cover custom-img relative items-center overflow-hidden">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />
      {/* <div className="grid grid-cols-1 sm:grid-cols-12 gap-5"> */}

      <div className="z-[5] m-4 gap-5 container max-w-full justify-center items-center flex flex-col sm:flex-row sm:max-w-4xl md:max-w-5xl ">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className=" place-self-center text-center justify-self-start mt-16 md:w-2/5"
        >
          <motion.div
            className="p-5 text-white z-[2] text-start max-w-lg gap-5"
            variants={textVariants}
          >
            <motion.h1
              className=" text-2xl md:text-3xl text-yellow-400 mb-5 font-bold  "
              variants={textVariants}
            >
              Avatar Protocol
            </motion.h1>
            <motion.p
              className="mb-5 font-semibold text-lg md:text-xl text-gray-300"
              variants={textVariants}
            >
              Avatar Protocol stands for revolutionizing your identity giving
              you independence and control over web3 opportunities alas breaking
              protocol
            </motion.p>
            <motion.button
              className=" rounded-lg bg-yellow-500 p-5 my-5 text-white text-lg sm:text-xl"
              variants={textVariants}
            >
              <Link href="/claim">Claim Airdrop</Link>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="  place-self-center mt-4 lg:mt-0 md:w-3/5"
        >
          <Image
            src={banner}
            alt="hero image"
            className="w-full h-full "
            // width={500}
            // height={500}
          />
        </motion.div>
      </div>
      <motion.div
        className="nameSlider"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Avatar Protocol on BSC
      </motion.div>
    </section>
  )
}

export default Hero
