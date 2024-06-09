import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import ClientComponent from "./clientComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love Candles",
  description: "Spread love and light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [collapsedMenuBar, setCollapsedMenuBar] = useState<boolean>(false);
  // const [cartViewCollapsed, setCollapseCartView] = useState<boolean>(false);
  // const toggleSidebar = () => {
  //   setCollapsedMenuBar(!collapsedMenuBar);
  // };
  // const toggleViewCart = () => {
  //   setCollapseCartView(!cartViewCollapsed);
  // };
  // const isLoggedIn = true;
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header
          isLoggedIn={isLoggedIn}
          collapsedMenuBar={collapsedMenuBar}
          setCollapsedMenuBar={setCollapsedMenuBar}
          toggleSidebar={toggleSidebar}
          toggleViewCart={toggleViewCart}
        /> */}
        {/* <Provider store={store}> */}
        <ClientComponent>{children}</ClientComponent>
        {/* </Provider> */}
        {/* Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
