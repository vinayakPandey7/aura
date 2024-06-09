// components/Sidebar.js
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaArrowLeft, FaGem, FaHeart, FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { LuUserPlus } from "react-icons/lu";

const SidebarComponent = ({
  isLoggedIn,
  collapsedMenuBar,
  setCollapsedMenuBar,
}: {
  isLoggedIn: boolean;
  collapsedMenuBar: boolean;
  setCollapsedMenuBar: (args: boolean) => void;
}) => {
  return (
    <Sidebar
      onBackdropClick={() => setCollapsedMenuBar(false)}
      toggled={collapsedMenuBar}
      breakPoint="always"
      collapsedWidth="0px"
      backgroundColor="white"
      transitionDuration={500}
    >
      <div className="flex justify-between items-center ">
        {/* back button */}
        <div
          onClick={() => setCollapsedMenuBar(!collapsedMenuBar)}
          className="p-5 cursor-pointer w-fit"
        >
          <FaArrowLeft />
        </div>
        <div className="p-5 cursor-pointer">
          {/* user */}
          {isLoggedIn ? <FaUserAlt size={22} /> : <LuUserPlus size={22} />}
        </div>
      </div>

      <Menu>
        <MenuItem> Categories</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
        <hr />
        {/* <MenuItem active icon={<CiLogout name="calendar" />}>
          Logout
        </MenuItem> */}
        {isLoggedIn && (
          <MenuItem>
            <div className="flex items-center justify-start gap-2">
              <CiLogout /> Logout
            </div>
          </MenuItem>
        )}
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
