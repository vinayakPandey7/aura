import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

const ReviewCard = ({ userReview }: { userReview: any }) => {
  return (
    <div className="p-6 w-full">
      <div className="flex gap-2">
        <div className="flex bg-[green] rounded-sm text-sm font-medium items-center w-fit px-1 text-[white] gap-0.5 ">
          {userReview?.userRating}
          <FaStar size={12} />
        </div>
        <span className="text-[#212121] text-sm font-semibold">
          {userReview?.reviewTitle}
        </span>
      </div>
      <p className="text-sm text-[#212121] mb-3 mt-3">
        {userReview?.reviewDetail}
      </p>

      <p className="flex gap-1 items-center text-[#878787] text-xs">
        <span className=" font-semibold ">{userReview?.userId?.name}</span>
        {userReview?.userId?.isCertifiedBuyer && (
          <>
            <LiaCertificateSolid size={18} />
            Certified Buyer
          </>
        )}
      </p>
    </div>
  );
};

export default ReviewCard;
