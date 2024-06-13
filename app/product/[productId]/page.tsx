"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useId } from "react";
import StarRating from "../StarRatingComponent";
import clsx from "clsx";
import { FaCartArrowDown } from "react-icons/fa";
import RatingCard from "../RatingCard";
import ReviewCard from "../ReviewCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Selectors } from "@/app/redux/selectors";
import { AppDispatch } from "@/app/ts/types/redux";
import { getProductDetail } from "@/app/redux/api/fetcher/product.fetchers";
import { addItemInWishlist, removeItemInWishlist, setCartProduct } from "@/app/redux/slice/productSlice";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
interface WishlistProps {
  params: {
    productId: string;
  };
}
const WishlistPage = (props: WishlistProps) => {
  const getUniqueId = () => useId();
  const dispatch = useDispatch<AppDispatch>();
  const [isInWishList,setIsInWishlist] = useState(false);
  const { productId } = props.params;

  console.log("sdfsdf", props.params);

  useEffect(() => {
    if (productId) {
      dispatch(getProductDetail({ productId: productId }));

    }
  }, []);

  const productData = useSelector(Selectors.USER_PRODUCT.PRODUCT_DETAIL);

  const handleAddToCart = () => {
    dispatch(setCartProduct(productData?.productDetail));
  };

  const handleAddToWishlist = () => {
    if(!isInWishList){
     
      dispatch(addItemInWishlist(productData?.productDetail));
      
    }else {
     
      dispatch(removeItemInWishlist(productData?.productDetail))
    }
   
  };

  const cart_product = useSelector(Selectors.USER_PRODUCT.CART_PRODUCT);
  const wishListItem = useSelector(Selectors.USER_PRODUCT.WISHLIST_PRODUCT);

  if (!productData) return null;
  console.log("sjdbfjsdbjfhs", productData?.productDetail);

  useEffect(() => {
    const isProductAddedInWishlist =  wishListItem?.find( res => res._id === productId)
    if(isProductAddedInWishlist){
      setIsInWishlist(true)
    }else{
      setIsInWishlist(false)
    }
  },[wishListItem])
  
  const { productDetail, reviewRatingData } = productData;
  return (
    <div>
      <div className="mx-4 md:mx-auto md:w-[80%] grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
        {/* Image section */}
        <div className="pr-3 pt-2 relative">
        {productDetail && <div onClick={handleAddToWishlist} className="cursor-pointer p-2 bg-[white] rounded-full absolute z-99 right-[20px] top-[16px]" style={{zIndex:10, boxShadow: '0 1px 4px 0 rgba(0,0,0,.1)'}}>
              {!isInWishList && <CiHeart size={22} />}
              {isInWishList && <IoMdHeart size={22} color='red'/>}
            </div>}
          <Carousel
            infiniteLoop={true}
            showThumbs={true}
            autoFocus={true}
            verticalSwipe={"natural"}
          >
            {productDetail?.productImgs?.map(
              (productImg: any, index: number) => (
                <div key={`productImg-${index}`}>
                  <img src={productImg?.imgUrl} />
                </div>
              )
            )}
          </Carousel>
        </div>

        {/* Product detail section */}
        <div className="overflow-y-auto">
          <div className="flex justify-between w-fit gap-4 h-auto items-center">
            <div className="font-bold text-3xl">
              {productDetail?.productName}
            </div>

            <div
              className={clsx(
                "border rounded-sm px-2 py-1 w-fit text-[12px] text-[white] ",
                {
                  ["bg-[#5cac5c] border-[#014301]  "]: productDetail?.inStock,
                  ["bg-[#db4545] border-[red]  "]: !productDetail?.inStock,
                }
              )}
            >
              {productDetail?.inStock ? "In Stock" : "Out of Stock"}
            </div>
           
          </div>
          {reviewRatingData?.overallRating && (
            <div className="mt-4">
              <StarRating rating={reviewRatingData?.overallRating} />
              <div className="text-sm font-thin mt-1.5">{`(${reviewRatingData?.totalReviewCount} reviews)`}</div>
            </div>
          )}
          {/* price */}
          <div className="flex gap-2 items-center mt-4">
            <span className="text-lg font-semibold">
              Rs. {productDetail?.currentPrice}.00
            </span>
            <span className="text-[#c15050] line-through text-sm">
              Rs. {productDetail?.markedPrice}.00
            </span>
            <span className="text-xs ">(Tax included)</span>
          </div>
          {/* product specs */}

          <div className="text-[#33333] text-sm my-6 font-normal">
            <ul className="list-disc pl-4">
              {productDetail?.productSpecs.map((spec: any) => (
                <li className="mb-2">{spec.desc}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-[#ff9f00] rounded-sm text-[white] font-normal text-[13px] w-full py-2.5 mb-2.5 flex justify-center items-center gap-2"
              onClick={handleAddToCart}
            >
              <FaCartArrowDown size={22} />
              ADD TO CART
            </button>
            <button className="bg-[#fb641b] rounded-sm text-[white] font-normal text-[13px] w-full py-2.5 mb-2.5">
              BUY NOW
            </button>
          </div>

          <div className="py-6 border px-4 mt-8">
            {/* Overall Rating Card */}
            <div className="mb-6">
              <span className="text-xl font-bold">Rating & Review</span>
              <RatingCard reviewRatingData={reviewRatingData} />
            </div>

            {/* Review card */}
            {reviewRatingData?.reviews?.map((reviewData: any) => (
              <div className=" border-t">
                <ReviewCard userReview={reviewData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
