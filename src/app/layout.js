'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import { useEffect, useRef, useState } from "react";
import { CartDataContext } from "@/common/cart-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [cartData, setCartData] = useState([])
  const isInitialRender = useRef(true); 

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartData'));
    if (items) {
      setCartData(items);
    }
  }, []);

  useEffect(() => {

    if (isInitialRender.current) {
      isInitialRender.current = false;  
      return; 
    }

    localStorage.clear();    
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData])

  return (
    <CartDataContext.Provider value={{cartData, setCartData}}>

    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
    </CartDataContext.Provider>
  );
}
