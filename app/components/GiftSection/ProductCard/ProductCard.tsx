import React from "react";
import { ProductItemProps } from "..";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/ts/types/redux";
import {
  addItemInWishlist,
  setCartProduct,
  setCurrentProduct,
} from "@/app/redux/slice/productSlice";

import { ToastContainer, toast } from "react-toastify";
// components/IconButton.js

const IconButton = ({ icon, label, handleClicked }: any) => {
  return (
    <button
      onClick={handleClicked}
      className="bg-[#111] rounded-[4px] text-[white] h-[36px] w-[38px] hover:bg-[#343333] flex justify-center items-center transition all duration-150 ease-in-out"
    >
      {icon}
      {/* TODO: it can be used for common button if requred with image and label */}
      {/* <span className="ml-2">{label}</span> */}
    </button>
  );
};

const ProductCard = ({ productItems }: { productItems: ProductItemProps }) => {
  const router = useRouter();

  const handleShowProductDetail = () => {
    // dispatch(setCurrentProduct(productItems));
    router.push(`/product/${productItems?._id}`);
    // router.push("/wishlist", undefined, { shallow: true });
  };

  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    toast("Added to Cart");
    dispatch(setCartProduct(productItems));
  };

  const handleAddToWishlist = () => {
    toast("Added in Wishlist");
    dispatch(addItemInWishlist(productItems));
  };

  return (
    <div className="relative">
      <motion.div
        className="box cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 50, damping: 40 }}
        onClick={handleShowProductDetail}
      >
        <div className="bg-[#EAA43A] absolute top-1 left-1 text-[11px] px-1 ">
          -{productItems?.productDiscount}%
        </div>
        <img src={productItems.imageUrl} alt="product-image" />
      </motion.div>

      {/* product detail */}
      <div className="flex flex-col gap-1.5 pt-2.5">
        <span className="text-xs text-center">{productItems.productName}</span>
        <div className="text-sm flex gap-2 items-center justify-center">
          <span className="text-[#222] line-through font-light">
            Rs. {productItems.markedPrice}
          </span>

          <span className="text-[green] font-medium">
            Rs. {productItems.currentPrice}
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 py-2.5">
          <motion.div className="box" whileTap={{ scale: 0.9 }}>
            <div onClick={handleAddToWishlist}>
              <IconButton icon={<CiHeart />} />
            </div>
          </motion.div>
          <motion.div className="box" whileTap={{ scale: 0.9 }}>
            <div onClick={handleAddToCart}>
              <IconButton icon={<IoIosCart />} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
