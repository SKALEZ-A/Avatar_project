"use client"

import { ethers } from "ethers"
import { contractAddress, contractABI } from "@/Constants/constant"
import Navbar from "@/components/Navbar"
import ConnectWallet from "@/components/ConnectWallet"
import { userCollection } from "@/firebase/firebase"
import { getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { truncateAddress } from "@/components/truncateAddress"
import avatar from "@/public/images/avatarmain.png"
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react"

const Invite = () => {
  const account = useAddress() // get address when wallet is connected or undefined if not connected
  const { contract } = useContract(contractAddress, contractABI) // get contract we want to interact with
  const { mutateAsync, error } = useContractWrite(contract, "claimReward")

  const [referralLink, setReferralLink] = useState("")
  const [referralsList, setReferralsList] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  useEffect(() => {
    const getReferralLink = async () => {
      if (!account) return
      setisLoading(true)
      try {
        const userQuery = query(
          userCollection,
          where("walletAddress", "==", account)
        )
        const userDocs = await getDocs(userQuery)
        const userData = userDocs.docs[0].data()
        const userReferralLink = `${location.origin}/claim?referralId=${userData.refId}`
        setReferralLink(userReferralLink)
        // get referral info
        const referedUserInfo = await getReferedUserInfo(userData.referrals)
        setReferralsList(referedUserInfo)
        console.log(referedUserInfo)
      } catch (err) {
        console.log(err)
      } finally {
        setisLoading(false)
      }
    }
    getReferralLink()
  }, [account])

  const getReferedUserInfo = async (referedUsersList) => {
    const referedUsersInfo = []
    for (let i = 0; i < referedUsersList.length; i++) {
      const userId = referedUsersList[i]
      try {
        const referedUserQuery = query(
          userCollection,
          where("telegramUserId", "==", userId)
        )
        const referedUserDocs = await getDocs(referedUserQuery)
        const referedUserdata = referedUserDocs.docs[0].data()
        const referedUser = {
          name: referedUserdata.telegramFirstName,
          username: referedUserdata.telegramUsername,
          address: referedUserdata.walletAddress,
        }

        referedUsersInfo.push(referedUser)
      } catch (err) {
        console.log(err)
      }
    }

    return referedUsersInfo
  }

  const handleCopyRefLink = async () => {
    if (!referralLink) return
    try {
      const write = await navigator.clipboard.writeText(referralLink)
      toast.success("Successfully copied referral link!")
    } catch (err) {
      console.log(err)
    }
  }

  // ============== CLAIM REWARDS IMPLEMENTATION ===============
  // in the claim function the addReferral function is called which sets the uint as current referral no.
  const claimReward = async () => {
    //call the claim function from the contract and pass all the user info
    setIsClaiming(true)
    if (!account) return toast.error("Please connect your wallet")

    try {
      // await provider.send("eth_requestAccounts", [])
      // const signer = provider.getSigner()
      // const contractInstance = new ethers.Contract(
      //   contractAddress,
      //   contractABI,
      //   signer
      // )
      // console.log(contractInstance.address)

      // const tx = await contractInstance.claimReward()
      // await tx.wait()

      await mutateAsync({ args: [] }) // function returned from useContractWrite hook, call function to send claim reward transaction
      toast.success("Referral points claimed successfully")
    } catch (err) {
      if (
        err.message
          .toLowerCase()
          .includes("insufficient referrals to claim reward")
      )
        return toast.error("Insufficient referrals to claim reward")
      toast.error("Unable to claim reward")
      console.log(err.message)
    } finally {
      setIsClaiming(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-[url('/images/avatarmain.png')]  bg-[#211608]/80 bg-fixed bg-top mt-[88px] pb-[50px] pt-10 px-5 xl:px-[90px]">
        <div className="text-white flex flex-col justify-between items-center  lg:flex-row">
          <div className=" w-[100%] md:w-[75%] lg:w-[40%] mb-10">
            <h1 className="text-[30px] xl:text-[35px] text-[#f4bf60]">
              Invite friends to Avatar Protocol
            </h1>
            <p className="font-bold">
              Tell you friends about Avatar Protocol. You'll earn a bonus for
              each one that joins Avatar Protocol
            </p>
          </div>
          <div className="w-[100%] md:w-[75%] lg:w-[50%] bg-[#211608]/75 py-10 px-5 rounded-lg">
            <p className="text-sm">Claim airdrop to get referral link</p>
            <div className="relative flex items-center justify-between  bg-[#382106] mb-[10px] rounded-lg w-[100%] h-[40px] px-5 mb-3 text-sm text-gray-700">
              {referralLink ? (
                <p className="text-gray-400">
                  {truncateAddress(referralLink.split("=")[1])}
                </p>
              ) : (
                <p className="text-gray-400">referral Id (optional)</p>
              )}
              <p
                onClick={handleCopyRefLink}
                className="absolute text-gray-300 right-0 mr-5 border-[2px] py-[3px] px-3 cursor-pointer hover:bg-[#f4bf60] hover:text-black rounded-lg border-[#9f8a49]"
              >
                Copy
              </p>
            </div>

            {/* <button
              className=" mt-3 rounded-lg bg-[#f4bf60] px-3 py-[5px] text-black w-[150px]"
              onClick={connectFunc}
            >
              {account ? `${truncateAddress(account)}` : "Connect wallet"}
            </button> */}
            <ConnectWallet />
          </div>
        </div>

        {/* referrals */}
        <div className="mt-10 text-white bg-[#211608]/75 w-[100%] py-5 px-5 rounded-lg">
          <p className="md:text-[20px]">
            Total referrals -{" "}
            {referralsList.length > 0 ? referralsList.length : 0}
          </p>
          {/* <p>Earned - ${36} </p> */}

          <p className="mt-3 w-[150px] border-[2px] py-[3px] px-3 rounded-lg border-[#9f8a49]">
            Your Referrals
          </p>
          <div className="mt-5 h-[200px] overflow-y-auto border-[2px] py-3 px-3 rounded-lg border-[#9f8a49]">
            {isLoading ? (
              "Loading..."
            ) : (
              <Referrals referralsList={referralsList} />
            )}
          </div>
          <div>
            <button
              className=" mt-3 rounded-lg bg-[#f4bf60] px-3 py-[5px] text-black w-[150px]"
              onClick={claimReward}
              disabled={!account ? true : isClaiming ? true : false}
            >
              {account
                ? isClaiming
                  ? "Claiming..."
                  : "Claim Reward"
                : "Connect wallet"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invite

const Referrals = ({ referralsList }) => {
  return (
    <ul className="flex gap-5 flex-wrap">
      {referralsList.map((referral, index) => (
        <Referral referral={referral} key={`${referral.name}${index}`} />
      ))}
    </ul>
  )
}

const Referral = ({ referral }) => {
  return (
    <li className="bg-[#382106] w-[150px] text-center py-3 px-3 rounded-lg">
      <p>{referral.name}</p>
      <p>{`${truncateAddress(referral.address)}`}</p>
    </li>
  )
}
