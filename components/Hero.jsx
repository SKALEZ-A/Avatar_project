"use client";
import React from "react";
import Image from "next/image";
import banner from "../public/images/avatarmain.png";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:pt-8 flex flex-items justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img relative items-center ">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />
      {/* <div className="grid grid-cols-1 sm:grid-cols-12 gap-5"> */}
      <div className="z-[5] m-4 gap-5 container max-w-full justify-center items-center flex flex-col sm:flex-row ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" place-self-center text-center justify-self-start"
        >
          <div className="p-5 text-white z-[2] text-start max-w-lg gap-5">
            <h1 className=" text-3xl text-yellow-400 mb-5 font-bold">
              Avatar Protocol
            </h1>
            <p className="mb-5 font-semibold">
              Avatar Protocol stands for revolutionizing your identity giving
              you independence and control over web3 opportunities alas breaking
              protocol
            </p>
            <button className=" rounded-lg bg-yellow-500 p-5 my-5 text-white">
              <Link href="/claim">Claim Airdrop</Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="  place-self-center mt-4 lg:mt-0"
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
    </section>
  );
};

export default Hero;
