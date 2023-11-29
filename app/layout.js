import { Inter } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ThirdwebProvider } from "@/components/ThirdwebProvider"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "$AVATAR",
  description: "Another ground-breaking meme Protocol",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          activeChain="goerli"
          clientId="5a1c13c31c6426317b1d1c2f5dcb1240"
        >
          {children}
          <ToastContainer />
        </ThirdwebProvider>
      </body>
    </html>
  )
}
