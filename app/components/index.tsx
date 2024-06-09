import React from "react";
import UserEngagementSection from "./UserEngagementSection";
import Footer from "./Footer";
import GiftSection from "./GiftSection";
import Header from "./Header";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { motion, useScroll } from "framer-motion";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Selectors } from "../redux/selectors";
import { AppDispatch } from "../ts/types/redux";
import store from "../redux/store";
import { useEffect } from "react";
import { getProductList } from "../redux/api/fetcher/product.fetchers";
const MainPage = ({ toggleSidebar, setCollapsedMenuBar, isLoggedIn }: any) => {
  // const { scrollYProgress } = useScroll();
  const current_product = useSelector(Selectors.USER_PRODUCT.CURRENT_PRODUCT);

  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(getProductList());
  // }, []);

  return (
    <div className="w-full bg-[white] text-[#3D3D3D] flex flex-col gap-14">
      {/* Menu bar */}

      {/* Heading */}
      <div className="flex justify-center flex-col text-center mx-6 mt-[16vh]">
        <span className="text-[22px] font-bold">
          Best Gifts for Every Occasion
        </span>
        <span className="text-[18px] font-extralight">
          Gift your Loved Ones our Handmade Gifts and make them feel Special and
          Happy.
        </span>
      </div>

      {/* Menu items */}
      <GiftSection />

      {/* User engagement Band */}
      <UserEngagementSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
