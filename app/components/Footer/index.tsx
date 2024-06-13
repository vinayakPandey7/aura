import FacebookIcon from "@/app/assets/svg/FacebookIcon";
import MessageBoxIcon from "@/app/assets/svg/MessageBoxIcon";
import MobileIcon from "@/app/assets/svg/MobileIcon";
import TwitterIcon from "@/app/assets/svg/TwitterIcon";
import WhatsappIcon from "@/app/assets/svg/WhatsappIcon";
import YoutubeIcon from "@/app/assets/svg/YoutubeIcon";
import React from "react";

const FooterMain = () => {
  return (
    <div className="p-6 md:p-10 lg:p-20 bg-[#fafafa] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-[#3D3D3D] gap-10 item-cenetr">
      {/* Our story */}
      <div className="">
        <p className="font-bold text-lg mb-4">Our Story</p>
        <div className="text-[13px] w-fit flex flex-col gap-1.5">
          <p className="hover:underline cursor-pointer">Our Journey</p>
          <p className="hover:underline cursor-pointer">Reviews</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Service</p>
        </div>
      </div>
      {/* Support */}
      <div className="">
        <p className="font-bold text-lg mb-4">Support</p>
        <div className="text-[13px] w-fit flex flex-col gap-1.5">
          <p className="hover:underline cursor-pointer">Contact Us</p>
          <p className="hover:underline cursor-pointer">Track your order</p>
          <p className="hover:underline cursor-pointer">Shipping Policy</p>
          <p className="hover:underline cursor-pointer">Return & Refund</p>
        </div>
      </div>
      {/* newsLatter */}
      <div className="">
        <p className="font-bold text-lg mb-4">Newslatter</p>
        <div className="text-[13px] w-fit flex flex-col gap-1.5">
          <p>Enter your email to receive new products details and Offers.</p>
          <input
            className="text-[13px] w-full h-[40px] border border-[#dddddd] px-5 mt-3 mb-1.5"
            placeholder="Email address"
          />
          <button className="bg-[black] text-[white] w-fit px-[15px] py-[8px]">
            Subscribe{" "}
          </button>
        </div>
      </div>
      {/* Contact us */}
      <div className="">
        <p className="font-bold text-lg mb-4">Contact Us</p>
        {/* logo Image here */}
        <div className="flex flex-col gap-[15px] text-[13px]">
          <p>Gift_Shop_Near_Me</p>

          <div className="flex gap-2 items-center">
            <MobileIcon width={12} height={12} />
            {/* TODO: add mobile no here */}
            +91 ------------
          </div>
          <div className="flex gap-2 items-center">
            <MessageBoxIcon width={12} height={12} />
            {/* TODO: add email address here */}
            helloCandleCare@gmail.com
          </div>
          <p className="text-lg font-bold pt-[25px] pb-[10px]">
            Stay Connected
            <div className="mt-3 flex gap-3">
              <span className="cursor-pointer">
                <FacebookIcon width={16} height={16} />
              </span>
              <span className="cursor-pointer">
                <TwitterIcon width={16} height={16} />
              </span>
              <span className="cursor-pointer">
                <YoutubeIcon width={16} height={16} />
              </span>
              <span className="cursor-pointer">
                <WhatsappIcon width={16} height={16} />
              </span>
            </div>
          </p>
        </div>
      </div>
      <div className="text-[#3D3D3D] text-[13px]">
        © 2024 Mridula gifts. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterMain;
