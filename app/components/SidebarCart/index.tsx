// components/Sidebar.js
import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaArrowLeft, FaGem, FaHeart, FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { LuUserPlus } from "react-icons/lu";
import { useId } from "react";
import { ProductItemProps } from "../GiftSection";
import { RxCross2 } from "react-icons/rx";
import CartItemCard from "./CartItemCard";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import useWindowDimensions, { ScreenType } from "@/app/utils/useWindowWidth";
import { Selectors } from "@/app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setCartProduct, delteCartProduct } from "@/app/redux/slice";
import { AppDispatch } from "@/app/ts/types/redux";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import emptyCartLottieAnimation from "../../assets/lottie/EmptyCart.json";
import { toast } from "react-toastify";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SidebarCart = ({
  cartViewCollapsed,
  setCollapseCartView,
  toggleViewCart,
}: {
  cartViewCollapsed: boolean;
  setCollapseCartView: any;
  toggleViewCart: any;
}) => {
  const { width, screenType } = useWindowDimensions();
  const dispatch = useDispatch<AppDispatch>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const cartItem = useSelector(Selectors.USER_PRODUCT.CART_PRODUCT);

  // Function to remove item by _id
  const removeCartItem = (product: any) => {
    // const updatedCartItems = cartItem?.cartProducts.filter(
    //   (item) => item._id !== productId
    // );
    // update cart item in redux
    toast(`${product?.productName} Removed from Cart`);
    dispatch(delteCartProduct(product));
  };

  useEffect(() => {
    console.log("sdfnjsdjfnsdhvs", cartItem);
  }, [cartItem]);

  return (
    <div
      className="fixed top-0 right-0 h-full w-[24vw] bg-[white] shadow-2xl text-[#3D3D3D] z-[9999] overflow-y-auto hide-scroll"
      style={{
        visibility: cartViewCollapsed ? "visible" : "hidden",
        width: screenType === ScreenType.MOBILE ? "75%" : "40%",
      }}
    >
      <div className="py-2.5 pl-[15px] border-b flex justify-between items-center pr-2.5 ">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <div className="p-1 cursor-pointer" onClick={toggleViewCart}>
          <RxCross2 size={18} />
        </div>
      </div>

      {cartItem?.cartProducts?.length === 0 && (
        <div className="w-full flex justify-center item-center h-[calc(100%_-_4rem)]">
          <div className="flex flex-col justify-center item-center gap-8 text-center w-[40%] h-full w-full">
            <Lottie loop={true} animationData={emptyCartLottieAnimation} />
            <h2 className="font-semibold">No Item in Cart</h2>
          </div>
        </div>
      )}

      {cartItem?.cartProducts?.length > 0 && (
        <>
          <ul className="p-4 flex flex-col gap-3">
            {cartItem?.cartProducts?.map((product, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                key={index}
              >
                <div className=" flex gap-[15px] ">
                  <img
                    src={product?.imageUrl}
                    alt="product image"
                    className="max-w-[100px]"
                  />
                  {/* name + rate  */}
                  <div className="flex flex-col  w-full">
                    {/* name */}
                    <div className="flex  justify-between ">
                      <div className="text-[13px] font-normal line-clamp-3 max-w-[70%]">
                        {product.productName}
                      </div>
                      <div
                        className="mr-2 cursor-pointer"
                        onClick={() => removeCartItem(product)}
                      >
                        <RiDeleteBinLine size={20} />
                      </div>
                    </div>
                    <div className="text-[11px] text-[#6a6868] font-extralight line-clamp-1 max-w-[80%]">
                      {product?.productDescription}
                      Single / Normal / Without Frame
                    </div>
                    {/* rate  */}
                    <div>
                      <div className="text-[13px] mt-3">
                        Rs. {product?.currentPrice}.00
                      </div>
                      {/* TODO: add incrementar here */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
          {/* Summary */}
          <hr />
          <div className="mt-5 mx-4 ">
            <div className="text-[14px] font-bold flex justify-between mb-2.5 ">
              <span>SUBTOTAL: </span>
              <span>Rs. {cartItem?.cartTotalPrice}.00 </span>
            </div>
            <p className="mb-[15px] text-sm font-light">
              Shipping & taxes calculated at checkout
            </p>
            <p className="mb-5 text-sm font-light">
              <input
                type="checkbox"
                className="mr-2"
                onClick={() => setIsChecked(!isChecked)}
              />
              I agree with the terms and conditions
            </p>
            <button
              className="bg-[#5cb25d] text-[white] font-normal text-[13px] w-full py-2.5 mb-2.5"
              style={{
                opacity: isChecked ? 1 : 0.5,
              }}
            >
              PROCEED TO CHECKOUT
            </button>
            <button className="bg-[#e34848] text-[white] font-normal text-[13px] w-full py-2.5 mb-2.5">
              VIEW CART
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarCart;
