import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Breef",
    description: "Breef for a web site development task",
}

export default function RootLayout({ children }) {
    return (
        <html lang="ua">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
