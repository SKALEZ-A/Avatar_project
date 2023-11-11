"use client";
import React from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { contractAddress, contractABI } from "@/Constants/constant";
import { useSearchParams } from "next/navigation";
import { app } from "../../firebase.js/firebase";
import {
  getFirestore,
  getDocs,
  query,
  collection,
  where,
  updateDoc,
  doc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import { toast } from "react-toastify";

const Claim = () => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const [airdropPasscode, setAirdropPasscode] = useState("");
  const [referralId, setReferralId] = useState("");
  const [userVerified, setUserVerified] = useState(false);
  const [referralLink, setReferralLink] = useState("");
  const searchParams = useSearchParams();
  const db = getFirestore(app);
  const userCollection = collection(db, "user");

  useEffect(() => {
    setReferralId(searchParams.get("referralId"));
  }, [searchParams]);

  const handleUsername = async (e) => {
    e.preventDefault();
    if (!airdropPasscode) return toast.error("Enter your airdrop passcode");
    try {
      const userQuery = query(
        userCollection,
        where("airdropPasscode", "==", Number(airdropPasscode))
      );

      const querySnapShot = await getDocs(userQuery);
      // confirm user in db through pass code
      if (querySnapShot.empty)
        return toast.error("Please Join the TG community for eligibility");

      // if user in DB do things here
      setUserVerified(true);
      const userDocs = querySnapShot.docs[0].data();
      setReferralLink(`${location.href}?referralId=${userDocs.referralId}`);
      toast.success("Congrats!, You are eligible for the airdrop");

      connectWallet();
      if (!referralId) return; // don't do anything if the referral ID is absent
      if (await checkIfUserHasbeingReffered(userDocs.userId)) return;
      updateReferralList(userDocs.userId);

      console.log(userDocs);
    } catch (err) {
      console.log(err);
    }
  };

  const updateReferralList = async (userId) => {
    // update referral list in db if user joins tg from website
    const referralIdQuery = query(
      userCollection,
      where("referralId", "==", referralId)
    );

    const referralIdSnapShot = await getDocs(referralIdQuery);
    if (referralIdSnapShot.empty) return console.log("Empty");
    const affiliateuserDoc = referralIdSnapShot.docs[0].data();

    if (userId == affiliateuserDoc.userId) return;

    const documentId = referralIdSnapShot.docs[0].id;
    const docRef = doc(userCollection, documentId);
    await updateDoc(docRef, { referrals: arrayUnion(userId) });
    console.log("User document updated successfully");
    console.log("affiliateuserDoc", affiliateuserDoc);
  };

  const getAllReferred = async () => {
    let allReferrals = [];
    const collectionDocs = await getDocs(userCollection);
    collectionDocs.forEach((collectionDoc) => {
      allReferrals.push(...collectionDoc.data().referrals);
    });

    return allReferrals;
  };

  const checkIfUserHasbeingReffered = async (userId) => {
    const referred = await getAllReferred();
    return referred.includes(userId);
  };

  const handleCopyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      toast.success(`Referral link copied successfully: ${referralLink}`);
    } catch (err) {
      console.log(err);
    }
  };

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
    <div className="flex h-[100vh] justify-center items-center ">
      <div className="w-[300px]">
        <form className="">
          <input
            className="block rounded-lg w-[100%] h-[30px] px-2 mb-3 text-sm text-gray-600"
            disabled
            value={referralId}
            placeholder="referral Id (optional)"
            type="text"
          />

          <a
            className="bg-yellow-500 text-white px-3 py-[5px] rounded-lg mr-[2%]"
            href="https://t.me/+TdNyqs6AM7tiZGY0"
            target="_blank"
            rel="noreferrer"
          >
            Join TG
          </a>
          <input
            className="mb-5 rounded-lg px-2 h-[30px] w-[70%] text-sm"
            type="number"
            min={0}
            required
            value={airdropPasscode}
            placeholder="Enter your airdrop passcode"
            onChange={(e) => setAirdropPasscode(e.target.value)}
          />

          <a
            href="https://t.me/airdropreferralbot_bot"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" bg-yellow-500 text-white px-3 py-[5px] rounded-lg w-[100%]">
              Get you airdrop passcode
            </button>
          </a>
          {userVerified && (
            <button
              className="mb-3 mt-3 bg-yellow-500 text-white px-3 py-[5px] rounded-lg w-[100%]"
              onClick={handleCopyReferralLink}
            >
              Copy your referral Link.
            </button>
          )}
          <button
            className=" mt-3 rounded-lg bg-yellow-500 px-3 py-[5px] text-white w-[100%]"
            onClick={handleUsername}
          >
            CLAIM
          </button>
        </form>
      </div>
    </div>
  );
};

export default Claim;
