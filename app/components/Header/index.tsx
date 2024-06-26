import { Selectors } from "@/app/redux/selectors";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { useSelector } from "react-redux";

const Header = ({
  isLoggedIn,
  collapsedMenuBar,
  toggleSidebar,
  toggleViewCart,
}: {
  isLoggedIn: boolean;
  collapsedMenuBar: boolean;
  toggleSidebar: any;
  setCollapsedMenuBar: any;
  toggleViewCart: () => any;
}) => {

  const cart_product = useSelector(Selectors.USER_PRODUCT.CART_PRODUCT);
  const wishListItem = useSelector(Selectors.USER_PRODUCT.WISHLIST_PRODUCT);
  const router = useRouter();
  return (
    <div className="bg-[#ffde1b] flex justify-between items-center py-5 px-[30px] w-full fixed z-50 ">
      <div className="">
        <div className="flex md:hidden cursor-pointer" onClick={toggleSidebar}>
          <TiThMenu size={22} />
        </div>
        <div className="hidden md:flex cursor-pointer" onClick={() => router.replace('/')} >Gift_Shop_Near_Me</div>
      </div>
      <div className="flex md:hidden cursor-pointer" onClick={() => router.replace('/')}>Gift_Shop_Near_Me</div>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:underline">
          <IoSearchOutline size={22} />
        </span>
        <span
          className="cursor-pointer hover:underline"
          onClick={() => router.push("/wishlist")}
        >
          {wishListItem?.length > 0 && <div className="bg-[#43BDAC] text-[white] absolute text-[10px] top-[12px] right-[100px] rounded-full min-w-4 h-4 flex justify-center items-center">
            {wishListItem?.length}
          </div>}
          {wishListItem?.length === 0 && <CiHeart size={22} />}

          {wishListItem?.length > 0 && <IoMdHeart size={22} color='red' />}
        </span>

        <div
          className="cursor-pointer hover:underline relative"
          onClick={() => toggleViewCart()}
        >
          {cart_product?.cartProducts?.length > 0 && <div className="bg-[#43BDAC] text-[white] absolute text-[10px] top-[-8px] left-[18px] rounded-full min-w-4 h-4 flex justify-center items-center">
            {cart_product?.cartProducts?.length}
          </div>}
          <RiShoppingBag3Fill size={22} />
        </div>

        <span className="cursor-pointer hover:underline">
          {isLoggedIn ? <FaUserAlt size={22} /> : <LuUserPlus size={22} />}
        </span>
      </div>
    </div>
  );
};

export default Header;
