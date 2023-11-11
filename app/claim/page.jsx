"use client";
import React, { Children } from "react";
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
  const [twitterFollowFileName, setTwitterFollowFileName] = useState("");
  const [likeTweetFileName, setLikeTweetFileName] = useState("");
  const [quoteRetweetFileName, setQuoteRetweetFileName] = useState("");
  const searchParams = useSearchParams();
  const db = getFirestore(app);
  const userCollection = collection(db, "user");

  useEffect(() => {
    setReferralId(searchParams.get("referralId"));
  }, [searchParams]);

  const handleVerifyUser = async () => {
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
    if (
      !likeTweetFileName ||
      !quoteRetweetFileName ||
      !twitterFollowFileName ||
      !userVerified
    )
      return toast.error(
        "Please verify you joined telegram to get referral link"
      );
    try {
      await navigator.clipboard.writeText(referralLink);
      toast.success(`Referral link copied successfully: ${referralLink}`);
    } catch (err) {
      console.log(err);
    }
  };

  async function connectWallet() {
    if (
      !likeTweetFileName ||
      !quoteRetweetFileName ||
      !twitterFollowFileName ||
      !userVerified
    )
      return toast.error("Please complete the tasks to claim airdrop");
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
    <div className="flex justify-center items-center bg-[#211608]">
      <div className="w-[100%] ">
        <div className="text-center px-[20px]">
          <h1 className="text-[#d5b380] text-[20px] font-bold mt-10">
            Avatar Protocol Airdrop Tasks
          </h1>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Complete Tasks And Claim Instant Self-Drop
          </p>
        </div>
        <div className="w-[100%] md:mt-[40px] m-auto  py-[60px] px-[10%] rounded-lg border-0 border-[#d5b380] md:px-[10%] md:w-[70%] md:border-2 lg:px[20%]">
          <input
            className="bg-[#382106] mb-[50px] rounded-lg w-[100%] h-[40px] px-2 mb-3 text-sm text-gray-700"
            disabled
            value={referralId}
            placeholder="referral Id (optional)"
            type="text"
          />

          <FormInput
            task={1}
            fileName={twitterFollowFileName}
            onFileName={setTwitterFollowFileName}
          >
            Follow <span className="text-[#d5b380]">@avatarprotocol</span> on
            twitter
          </FormInput>
          <FormInput
            task={2}
            fileName={likeTweetFileName}
            onFileName={setLikeTweetFileName}
          >
            Like this <span className="text-[#d5b380]">tweet</span>
          </FormInput>
          <FormInput
            task={3}
            fileName={quoteRetweetFileName}
            onFileName={setQuoteRetweetFileName}
          >
            Quote <span className="text-[#d5b380]">Retweet</span> on twitter,
            using these hashtags{" "}
            <span className="text-[#d5b380]"> #avatarprotocol #airdrop </span>{" "}
            on twitter
          </FormInput>

          <div className="text-gray-300 text-sm">
            <p className="text-[#d5b380] mb-5">Task 4</p>

            <p className="mb-5 font-bold ">
              Join our{" "}
              <span className="text-[#d5b380]">
                <a
                  href="https://t.me/+TdNyqs6AM7tiZGY0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </span>{" "}
              group
            </p>

            <p className="text-sm">
              Enter your airdrop passcode to verify you joined the telegram
              group
            </p>
            <div className="flex">
              <input
                className="bg-[#382106] rounded-lg w-[75%] h-[40px] px-2 mb-3 text-[13px] text-gray-500 mr-[3%] flex items-center md:text-sm"
                type="number"
                min={0}
                value={airdropPasscode}
                placeholder="Enter your airdrop passcode"
                onChange={(e) => setAirdropPasscode(e.target.value)}
              />
              <button
                onClick={handleVerifyUser}
                className="mb-10 border-[2px] h-[40px] w-[22%] rounded-lg border-[#9f8a49] px-2 py-2 text-[#9f8a49] text-[12px] text-center flex items-center justify-center"
              >
                verify
              </button>
            </div>

            <a
              href="https://t.me/airdropreferralbot_bot"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-[-30px] mb-10 border-[2px] h-[40px] w-[100%] rounded-lg border-[#9f8a49] px-2 py-2 text-[#9f8a49] text-[12px] text-center flex items-center justify-center">
                Get you airdrop passcode
              </button>
            </a>
          </div>

          <div>
            <p className="text-[#d5b380]">Bonus Task</p>
            <p className="text-gray-300 mt-3">Invite friends and earn more</p>
            <p className="text-gray-400 text-sm">
              click{" "}
              <span
                className="text-[#d5b380] cursor-pointer"
                onClick={handleCopyReferralLink}
              >
                Here
              </span>{" "}
              to get your referral code
            </p>
            <button
              className=" mt-3 rounded-lg bg-[#f4bf60] px-3 py-[5px] text-black w-[200px]"
              onClick={connectWallet}
            >
              Claim airdrop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;

const FormInput = ({ task, fileName, onFileName, children }) => {
  async function handleUploadFile(files, setterFunc) {
    const [file] = files;
    const { name: fileName, size } = file;
    const fileSize = size / 1000; // bytes to kilobytes
    setterFunc(fileName);
  }

  return (
    <div className="text-gray-300 text-sm ">
      <p className="text-[#d5b380] mb-5">Task {task}</p>

      <p className="mb-5 font-bold">{children}</p>
      <p>Screenshot the completed ask and upload it here.</p>

      <div className="relative flex">
        <input
          type="file"
          id="file"
          class="opacity-0 absolute"
          onChange={(e) => handleUploadFile(e.target.files, onFileName)}
        />
        <div
          className="bg-[#382106] rounded-lg w-[75%] h-[40px] px-2 mb-3 text-sm text-gray-700 mr-[3%] flex items-center"
          placeholder={`choose file`}
        >
          {fileName ? fileName : "choose file"}
        </div>
        <label
          for="file"
          className="mb-10 border-[2px] h-[40px] w-[22%] rounded-lg border-[#9f8a49] px-2 py-2 text-[#9f8a49] text-[12px] text-center flex items-center justify-center"
        >
          Upload
        </label>
      </div>
    </div>
  );
};
