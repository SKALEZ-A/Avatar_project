import { ConnectWallet } from "@thirdweb-dev/react"
// const { useState } = require("react")
// import { ethers } from "ethers"

function ConnectWalletThirdWeb() {
  // const [provider, setProvider] = useState(null)
  // const [account, setAccount] = useState(null)
  // const [isConnected, setIsConnected] = useState(false)

  // const connectFunc = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum)
  //       setProvider(provider)
  //       await provider.send("eth_requestAccounts", [])
  //       const signer = provider.getSigner()
  //       const address = await signer.getAddress()
  //       setAccount(address)
  //       console.log("metamask connected" + address)
  //       setIsConnected(true)
  //     } catch (err) {
  //       console.log(err)
  //       setIsConnected(false)
  //     }
  //   } else {
  //     console.error("metamask not found")
  //   }
  // }

  // return { provider, account, isConnected, connectFunc }

  return <ConnectWallet modalSize="compact" />
}

export default ConnectWalletThirdWeb
