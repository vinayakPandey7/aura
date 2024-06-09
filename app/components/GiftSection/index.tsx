import React, { useEffect, useId } from "react";
import ProductCard from "./ProductCard/ProductCard";
import FacebookIcon from "@/app/assets/svg/FacebookIcon";
import TwitterIcon from "@/app/assets/svg/TwitterIcon";
import YoutubeIcon from "@/app/assets/svg/YoutubeIcon";
import WhatsappIcon from "@/app/assets/svg/WhatsappIcon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/ts/types/redux";
import { getProductList } from "@/app/redux/api/fetcher/product.fetchers";
import { Selectors } from "@/app/redux/selectors";
export interface ProductItemProps {
  _id: string;
  imageUrl: any;
  productDiscount: number;
  productName: string;
  markedPrice: number;
  currentPrice: number;
}
const GiftSection = () => {
  // todo :ProductItemProps created modal implement when done implementation
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const productList = useSelector(Selectors.USER_PRODUCT.PRODUCT_LIST);

  console.log("sdfsdfs", productList);

  return (
    <div className="bg-[white] w-4/5 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6">
        {productList.map((productItems: ProductItemProps, index: number) => (
          <ProductCard key={index} productItems={productItems} />
        ))}
      </div>
    </div>
  );
};

export default GiftSection;
