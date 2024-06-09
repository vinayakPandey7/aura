import React from "react";
import { ProductItemProps } from "../../GiftSection";

const CardItemCard = ({ productItem }: { productItem: ProductItemProps }) => {
  return (
    <>
      <div className="flex justify-end ">
        {/* CardItemCard */}
        <div className="max-w-[72px] flex justify-end">
          <div className="flex gap-[15px] w-full">
            <div className="text-sm">{productItem?.productName}</div>
          </div>
          <img src={productItem?.imageUrl} alt="cart product img" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardItemCard;
