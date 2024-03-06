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
          activeChain="binance"
          clientId="c24255f27090571ead1beac4706f9b3a"
        >
          {children}
          <ToastContainer />
        </ThirdwebProvider>
      </body>
    </html>
  )
}
