"use client"
import { ethers } from "ethers"
import { useState, useEffect, useRef } from "react"
import { contractAddress, contractABI } from "@/Constants/constant"
import { useSearchParams } from "next/navigation"
import { userCollection } from "@/firebase/firebase"
import {
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  arrayUnion,
  addDoc,
} from "firebase/firestore"
import { toast } from "react-toastify"
import crypto from "crypto"
import useConnectWallet from "@/components/useConnectWallet"
import { truncateAddress } from "@/components/truncateAddress"

const Claim = () => {
  const [userId, setUserId] = useState("")
  const [referralId, setReferralId] = useState("")
  const [userVerified, setUserVerified] = useState(false)
  const [twitterFollowFileName, setTwitterFollowFileName] = useState("")
  const [likeTweetFileName, setLikeTweetFileName] = useState("")
  const [quoteRetweetFileName, setQuoteRetweetFileName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  const [verified, setVerified] = useState(false)

  const searchParams = useSearchParams()

  const ref = useRef(null)

  const { provider, account, isConnected, connectFunc } = useConnectWallet()

  useEffect(() => {
    setReferralId(searchParams.get("referralId"))
  }, [searchParams])

  useEffect(() => {
    // get user from db to see if they are already verified
    if (!account) return
    console.log(account, "ac")
    const getUserByWalletAddress = async () => {
      try {
        const userQuery = query(
          userCollection,
          where("walletAddress", "==", account)
        )
        const userDocs = await getDocs(userQuery)
        if (userDocs.empty) return
        setVerified(true)
        console.log(userDocs.docs[0].data())
      } catch (err) {
        console.log(err)
      }
    }

    getUserByWalletAddress()
  }, [account])

  const handleVerifyUser = async () => {
    setIsLoading(true)
    if (!userId) return toast.error("Enter your UserID")
    try {
      const res = await fetch(
        `${location.origin}/api/telegrambot?userid=${userId}`
      )
      const data = await res.json()

      if (data.status == "left")
        return toast.error(
          "Please join the TG community to qualify for the airdrop"
        )

      console.log(data)

      const name = data.member.user.first_name
      const username = data.member.user.username

      console.log(ref)

      ref.current = { name, username }

      console.log(typeof name, username)
      setUserVerified(true)
      toast.success("Congrats!, You are eligible for the airdrop")

      if (!referralId) return // don't do anything if the referral ID is absent
      // if (await checkIfUserHasbeingReffered(userDocs.userId)) return
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const updateReferralList = async (userId) => {
    // update referral list of refferer in db if user joins tg from website
    if (!referralId) return
    const referralIdQuery = query(
      userCollection,
      where("refId", "==", referralId)
    )

    const referralIdSnapShot = await getDocs(referralIdQuery)
    if (referralIdSnapShot.empty) return console.log("Empty")
    const affiliateuserDoc = referralIdSnapShot.docs[0].data()

    if (userId == affiliateuserDoc.userId) return

    const documentId = referralIdSnapShot.docs[0].id
    const docRef = doc(userCollection, documentId)
    await updateDoc(docRef, { referrals: arrayUnion(userId) })
    console.log("User document updated successfully")
    console.log("affiliateuserDoc", affiliateuserDoc)
  }

  // create user once they claim airdrop
  const handleCreateUser = async () => {
    const refId = account
    const newUserData = {
      telegramFirstName: ref.current.name,
      telegramUsername: ref.current.username,
      telegramUserId: Number(userId),
      walletAddress: account,
      verified: true,
      refId,
      referrals: [],
    }
    try {
      const newUser = await addDoc(userCollection, newUserData)
      await updateReferralList(newUserData.telegramUserId)
    } catch (err) {
      console.log(err)
    }
  }

  async function claimAirdrop() {
    setIsClaiming(true)
    if (provider == null) return toast.error("Please connect your wallet")
    if (
      !verified &&
      (!likeTweetFileName ||
        !quoteRetweetFileName ||
        !twitterFollowFileName ||
        !userVerified)
    )
      return toast.error("Please complete the tasks to claim airdrop")

    if (await checkUserExists())
      return toast.error("This wallet address has claimed airdrop")

    try {
      await provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()
      const contractInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contractInstance.address)

      // check if referralId exists, if not use zero address
      let refId
      if (referralId) {
        refId = referralId
      } else {
        refId = "0x0000000000000000000000000000000000000000"
      }
      // value updated
      const value = ethers.utils.parseEther("0.01")
      const tx = await contractInstance.airdrop(
        ref.current.username,
        ref.current.name,
        userId,
        refId,
        { value: value }
      )
      await tx.wait()
      await handleCreateUser()
      // contractInstance.on("Transfer", async (from, to, tokens, event) => {
      //   console.log(from, to, tokens)
      //   await handleCreateUser()
      // })
      toast.success("Airdrop claimed succesfully")
    } catch (err) {
      if (err.message.toLowerCase().includes("trading not enabled"))
        return toast.error("You cannot claim airdop yet")
      toast.error("Unable to claim airdrop")
      console.log(err.message)
    } finally {
      setIsClaiming(false)
    }
  }

  const checkUserExists = async () => {
    // check if user alread exist before adding
    if (!account) return
    const userSnapshot = query(
      userCollection,
      where("walletAddress", "==", account)
    )
    const userDoc = await getDocs(userSnapshot)
    if (!userDoc.empty) return true
    return false
  }

  const getRandomId = () => {
    const uniqueBytes = crypto.randomBytes(6)
    const uniqueIdentifier = uniqueBytes.toString("hex")

    return uniqueIdentifier
  }

  return (
    <div
      className={`flex justify-center items-center bg-[#211608] ${
        verified ? "h-[100vh]" : ""
      }`}
    >
      <div
        className={`w-[100%] ${
          isConnected ? "" : "h-[100vh] flex justify-center items-center"
        }`}
      >
        <div className="text-center px-[20px]">
          <h1 className="text-[#d5b380] text-[20px] font-bold mt-10">
            Avatar Protocol Airdrop Tasks
          </h1>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Complete Tasks And Claim Instant Self-Drop
          </p>
          <button
            className=" mt-3 rounded-lg bg-[#f4bf60] px-3 py-[5px] text-black w-[150px]"
            onClick={connectFunc}
          >
            {account ? `${truncateAddress(account)}` : "Connect Wallet"}
          </button>
        </div>
        {isConnected && (
          <div className="w-[100%] md:mt-[40px] m-auto  py-[60px] px-[10%] rounded-lg border-0 border-[#d5b380] md:px-[10%] md:w-[70%] md:border-2 lg:px[20%]">
            {!verified && (
              <>
                <input
                  className="bg-[#382106] mb-[50px] rounded-lg w-[100%] h-[40px] px-2 mb-3 text-sm text-gray-500"
                  readOnly
                  value={referralId}
                  placeholder="referral Id (optional)"
                  type="text"
                />

                <FormInput
                  task={1}
                  fileName={twitterFollowFileName}
                  onFileName={setTwitterFollowFileName}
                >
                  Follow <span className="text-[#d5b380]">@avatarprotocol</span>{" "}
                  on twitter
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
                  Quote <span className="text-[#d5b380]">Retweet</span> on
                  twitter, using these hashtags{" "}
                  <span className="text-[#d5b380]">
                    {" "}
                    #avatarprotocol #airdrop{" "}
                  </span>{" "}
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
                    Enter your userId to verify you joined the telegram group
                  </p>
                  <div className="flex">
                    <input
                      className="bg-[#382106] rounded-lg w-[75%] h-[45px] px-2 mb-3 text-[13px] text-gray-500 mr-[3%] flex items-center md:text-sm"
                      type="number"
                      min={0}
                      value={userId}
                      placeholder="Enter your airdrop passcode"
                      onChange={(e) => setUserId(e.target.value)}
                    />
                    <button
                      onClick={handleVerifyUser}
                      className="mb-10 border-[2px] h-[45px] w-[22%] rounded-lg border-[#9f8a49] px-2 py-2 text-[#9f8a49] text-[12px] text-center flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Verify"}
                    </button>
                  </div>

                  <a
                    href="https://t.me/airdropreferralbot_bot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="mt-[-30px] mb-10 border-[2px] h-[45px] w-[100%] rounded-lg border-[#9f8a49] px-2 py-2 text-[#9f8a49] text-[12px] text-center flex items-center justify-center">
                      Get your userId
                    </button>
                  </a>
                </div>
              </>
            )}

            <div>
              <p className="text-[#d5b380]">Bonus Task</p>
              <p className="text-gray-300 mt-3">Invite friends and earn more</p>
              <p className="text-gray-400 text-sm">
                click{" "}
                <span className="text-[#f4bf60] font-bold text-lg cursor-pointer">
                  <a href="/invites">Here</a>
                </span>{" "}
                to get your referral code
              </p>
              <button
                className=" mt-3 rounded-lg bg-[#f4bf60] px-3 py-[5px] text-black w-[200px]"
                onClick={claimAirdrop}
                disabled={isClaiming}
              >
                {isClaiming ? "Claiming..." : "Claim airdrop"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Claim

const FormInput = ({ task, fileName, onFileName, children }) => {
  async function handleUploadFile(files, setterFunc) {
    const [file] = files
    const { name: fileName, size } = file
    const fileSize = size / 1000 // bytes to kilobytes
    setterFunc(fileName)
  }

  return (
    <div className="text-gray-300 text-sm ">
      <p className="text-[#d5b380] mb-5">Task {task}</p>

      <p className="mb-5 font-bold">{children}</p>
      <p>Screenshot the completed ask and upload it here.</p>

      <div className="relative flex">
        <input
          type="file"
          id={task}
          className="opacity-0 absolute"
          onChange={(e) => handleUploadFile(e.target.files, onFileName)}
        />
        <div
          className="bg-[#382106] rounded-lg w-[75%] h-[45px] px-2 mb-3 text-[13px] text-gray-300 mr-[3%] flex items-center "
          placeholder={`choose file`}
        >
          {fileName ? fileName : "choose file"}
        </div>
        <label
          htmlFor={task}
          className="mb-10 border-[2px] h-[45px] w-[22%] rounded-lg border-[#9f8a49] px-2 py-2 text-[#9f8a49] text-[12px] text-center flex items-center justify-center"
        >
          Upload
        </label>
      </div>
    </div>
  )
}
