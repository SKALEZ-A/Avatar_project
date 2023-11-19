import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "$AVATAR",
  description: "Another ground-breaking meme Protocol",
}

function CustomLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.example.com/three.r134.min.js"></script>
        <script src="https://cdn.example.com/vanta.birds.min.js"></script>
      </head>
      <body>
        {children}
        <script>
          {`
            VANTA.BIRDS({
              el: "#your-element-selector",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              birdSize: 3.80,
              wingSpan: 40.00,
              speedLimit: 8.00
            });
          `}
        </script>
      </body>
    </html>
  )
}

export default CustomLayout
