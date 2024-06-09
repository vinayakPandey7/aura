"use client";
import MainPage from "./components";
import { useState } from "react";
import SidebarMenuComponent from "./components/Sidebar";
import Header from "./components/Header";
import { motion, useScroll } from "framer-motion";
import SidebarCart from "./components/SidebarCart";
import useWindowDimensions, { ScreenType } from "./utils/useWindowWidth";
export default function Home() {
  const [collapsedMenuBar, setCollapsedMenuBar] = useState<boolean>(false);
  const [cartViewCollapsed, setCollapseCartView] = useState<boolean>(false);
  const toggleSidebar = () => {
    setCollapsedMenuBar(!collapsedMenuBar);
  };
  const toggleViewCart = () => {
    setCollapseCartView(!cartViewCollapsed);
  };
  const isLoggedIn = true;
  const { scrollYProgress } = useScroll();
  const { width, screenType } = useWindowDimensions();
  return (
    <>
      <div style={{ display: "flex", height: "100vh", minHeight: "400px" }}>
        {screenType === ScreenType.MOBILE && (
          <SidebarMenuComponent
            collapsedMenuBar={collapsedMenuBar}
            setCollapsedMenuBar={setCollapsedMenuBar}
            isLoggedIn={isLoggedIn}
          />
        )}
        <SidebarCart
          cartViewCollapsed={cartViewCollapsed}
          setCollapseCartView={setCollapseCartView}
          toggleViewCart={toggleViewCart}
        />
        <Header
          isLoggedIn={isLoggedIn}
          collapsedMenuBar={collapsedMenuBar}
          setCollapsedMenuBar={setCollapsedMenuBar}
          toggleSidebar={toggleSidebar}
          toggleViewCart={toggleViewCart}
        />
        <motion.div
          className="fixed top-[99vh] left-0 right-0 h-[10px] bg-[#8fea8f] origin-[0%] z-50  rounded-r-lg"
          style={{ scaleX: scrollYProgress }}
        />
        <main style={{ display: "flex" }}>
          <MainPage
            setCollapsedMenuBar={setCollapsedMenuBar}
            toggleSidebar={toggleSidebar}
            isLoggedIn={isLoggedIn}
          />
        </main>
      </div>
    </>
  );
}
