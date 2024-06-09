import React from "react";
import { FaStar } from "react-icons/fa";
import ProgressBar from "../ProgressBar";
import { useEffect } from "react";
import { getPercentage } from "@/app/utils/commonFunc";
import ReviewCard from "../ReviewCard";

const RatingCard = ({ reviewRatingData }: { reviewRatingData: any }) => {
  console.log("sdfsdf", reviewRatingData);

  const overallRating = reviewRatingData?.totalRatingCount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex gap-1 items-center text-2xl justify-end">
          {reviewRatingData?.overallRating}
          <FaStar size={32} />
        </div>

        <div className="text-center mt-2 text-sm font-light text-[#878787]">
          {reviewRatingData?.totalRatingCount} rating <br />& <br />
          {reviewRatingData?.totalReviewCount} reviews
        </div>
      </div>
      <div className="flex flex-col gap-1.5 text-[12px] mt-6 md:mt-0">
        <span className="flex items-center gap-2">
          5<FaStar size={14} />
          <ProgressBar
            value={getPercentage(
              reviewRatingData?.ratingFiveCount,
              overallRating
            )}
          />
          <span className="text-[#878787] text-xs font-normal">
            {reviewRatingData?.ratingFiveCount}
          </span>
        </span>
        <span className="flex items-center gap-2">
          4<FaStar size={14} />
          <ProgressBar
            value={getPercentage(
              reviewRatingData?.ratingFourCount,
              overallRating
            )}
          />
          <span className="text-[#878787] text-xs font-normal">
            {reviewRatingData?.ratingFourCount}
          </span>
        </span>
        <span className="flex items-center gap-2">
          3<FaStar size={14} />
          <ProgressBar
            value={getPercentage(
              reviewRatingData?.ratingThreeCount,
              overallRating
            )}
          />
          <span className="text-[#878787] text-xs font-normal">
            {reviewRatingData?.ratingThreeCount}
          </span>
        </span>
        <span className="flex items-center gap-2">
          2<FaStar size={14} />
          <ProgressBar
            value={getPercentage(
              reviewRatingData?.ratingTwoCount,
              overallRating
            )}
          />
          <span className="text-[#878787] text-xs font-normal">
            {reviewRatingData?.ratingTwoCount}
          </span>
        </span>
        <span className="flex items-center gap-2 ml-0.5">
          1<FaStar size={14} />
          <ProgressBar
            value={getPercentage(
              reviewRatingData?.ratingOneCount,
              overallRating
            )}
          />
          <span className="text-[#878787] text-xs font-normal">
            {reviewRatingData?.ratingOneCount}
          </span>
        </span>
      </div>
    </div>
  );
};

export default RatingCard;
