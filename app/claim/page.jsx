"use client";
import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import { contractAddress, contractABI } from "@/Constants/constant";

const Claim = () => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("metamask connected " + address);
        setIsConnected(true);
        claimAirdrop();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.error("metamask not found");
    }
  }

  async function claimAirdrop() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    console.log(contractInstance.address);

    const value = ethers.utils.parseEther("0.02");
    const tx = await contractInstance.airdrop({ value: value });
    await tx.wait();
  }

  return (
    <div>
      <button
        className="rounded-lg bg-yellow-500 p-5 my-5 text-white"
        onClick={connectWallet}
      >
        CLAIM
      </button>
    </div>
  );
};

export default Claim;
