"use client";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import useWindowDimensions, { ScreenType } from "./utils/useWindowWidth";
import SidebarMenuComponent from "./components/Sidebar";
import SidebarCart from "./components/SidebarCart";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div>
      <Provider store={store}>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          style={{ display: "flex", height: "100vh", minHeight: "400px" }}
          className="flex-col gap-[6vh]"
        >
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
          <div>
            <Header
              isLoggedIn={isLoggedIn}
              collapsedMenuBar={collapsedMenuBar}
              setCollapsedMenuBar={setCollapsedMenuBar}
              toggleSidebar={toggleSidebar}
              toggleViewCart={toggleViewCart}
            />
          </div>
          <motion.div
            className="fixed top-[99vh] left-0 right-0 h-[10px] bg-[#8fea8f] origin-[0%] z-50  rounded-r-lg"
            style={{ scaleX: scrollYProgress }}
          />
          {/* component will render from here */}

          {children}
          {/* Footer */}
          <div className="mt-[10vh]">
            <Footer />
          </div>
        </div>
      </Provider>
      ;
    </div>
  );
}
