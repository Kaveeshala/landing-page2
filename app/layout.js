import { Roboto } from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata = {
  title: "Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
