"use client";
import React, { useEffect } from "react";
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
interface WishlistProps {
  params: {
    productId: string;
  };
}
const WishlistPage = (props: WishlistProps) => {
  const getUniqueId = () => useId();
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = props.params;

  console.log("sdfsdf", props.params);

  useEffect(() => {
    if (productId) {
      dispatch(getProductDetail({ productId: productId }));
    }
  }, []);

  const productData = useSelector(Selectors.USER_PRODUCT.PRODUCT_DETAIL);

  // const productDetail: any = {
  //   _id: getUniqueId(),
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716508800&semt=ais_user",
  //   productDiscount: 12, // product collection
  //   productName: "Framed Digital Painting", // product collection
  //   markedPrice: 2000, // product collection
  //   currentPrice: 1200, // product collection
  //   rating: {
  //     userReview: [
  //       {
  //         rating: 4,
  //         title: "Amazing Product",
  //         reviewDesc: "description",
  //         customerName: "Ritesh",
  //         isCertifiedBuyer: true,
  //       },
  //       {
  //         rating: 5,
  //         title: "Awesome Product best product",
  //         reviewDesc: "It is the best product that you can have n market",
  //         customerName: "Raghuram rajan",
  //         isCertifiedBuyer: true,
  //       },
  //       {
  //         rating: 4,
  //         title: "Killer Product",
  //         reviewDesc: "It is the best product that you can have n market",
  //         customerName: "Vinayak Pandey",
  //         isCertifiedBuyer: true,
  //       },
  //     ],
  //     overallRating: 3.5,
  //     ratingFiveCount: 1400,
  //     ratingFourCount: 1200,
  //     ratingThreeCount: 2080,
  //     ratingTwoCount: 2000,
  //     ratingOneCount: 2800,
  //     totalRatingCount: 3000,
  //     totalReviewCount: 239,
  //   }, // review collection
  //   reviewCount: 169, // review collection
  //   inStock: true, // product collection
  //   productImgs: [
  //     {
  //       imgUrl:
  //         "https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716508800&semt=ais_user",
  //     },
  //     {
  //       imgUrl:
  //         "https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716508800&semt=ais_user",
  //     },
  //     {
  //       imgUrl:
  //         "https://img.freepik.com/free-photo/fresh-autumn-leaves-reveal-vibrant-organic-pattern-generated-by-ai_188544-15037.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716508800&semt=ais_user",
  //     },
  //   ],
  //   productSpecs: [
  //     {
  //       desc: "Unique Gift for Birthday, Anniversary, Wedding and any other occasion.",
  //     },
  //     {
  //       desc: "Beautifully Craved On Leaf",
  //     },
  //     { desc: "Stay Forever Same" },
  //     { desc: "Get it with Acrylic Frame" },
  //   ],
  //   productDescription: "",
  //   isAddedToCard: false, // frontend handled
  //   EstimatedDelivery: "", // TODO: need to implement no provision in 1.0 release
  //   noOfPeopleLookingForThisProduct: 99, // no provision as of now

  //   shippingPolicy: "", // frontend handled
  // };

  const handleAddToCart = () => {
    // dispatch(setCartProduct(productDetail));
  };

  // const userReview = productDetail?.rating?.userReview;

  if (!productData) return null;
  console.log("sjdbfjsdbjfhs", productData);

  const { productDetail, reviewRatingData } = productData;
  return (
    <div>
      <div className="mx-4 md:mx-auto md:w-[80%] grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
        {/* Image section */}
        <div className="pr-3 pt-2">
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
