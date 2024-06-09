import React from "react";
import Star from "./StarComponent/index"; // Adjust the import path as necessary

const StarRating = ({ rating }: any) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1">
      {[...Array(filledStars)].map((_, index) => (
        <Star key={`filled-${index}`} filled />
      ))}
      {hasHalfStar && <Star key="half" half />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} filled={false} />
      ))}
    </div>
  );
};

export default StarRating;
