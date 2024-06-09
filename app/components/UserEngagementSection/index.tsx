import ShippingIcon from "@/app/assets/svg/FreeShipping";
import LoveIcon from "@/app/assets/svg/LoveIcon";
import WhatsappIcon from "@/app/assets/svg/WhatsappIcon";
import React from "react";

interface UserEngagementProp {
  imgIcon: React.JSX.Element;
  heading: string;
  subText: string;
}

const UserEngagementSection = () => {
  const UserEngagement: UserEngagementProp[] = [
    {
      imgIcon: <LoveIcon fill="#eeeeee" width={40} height={40} />,
      heading: "Made with Love",
      subText: "Our products are handmade with professionals",
    },
    {
      imgIcon: <ShippingIcon fill="#eeeeee" width={40} height={40} />,
      heading: "Free Shipping",
      subText: "Free Shipping On All Orders ",
    },
    {
      imgIcon: <WhatsappIcon fill="#eeeeee" width={38} height={38} />,
      heading: "WhatsApp Support",
      // TODO: add mobile number here
      subText: "Quick Response +91------",
    },
  ];
  const InfoBox = (engagementData: UserEngagementProp, key: number) => (
    <div className="flex gap-6 items-center py-[30px]" key={key}>
      {/* <IMG></IMG> */}

      {engagementData?.imgIcon}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-[white]">
          {" "}
          {engagementData?.heading}
        </p>
        <p className="text-[13px] text-[white]"> {engagementData?.subText} </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#162b75] w-full flex justify-center px-[20px] h-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
        {UserEngagement.map((data: UserEngagementProp, index: number) =>
          InfoBox(data, index)
        )}
      </div>
    </div>
  );
};

export default UserEngagementSection;
