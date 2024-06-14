import React from "react";
import loadingLottieAnimation from "./assets/lottie/loadingAnimation.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import dynamic from "next/dynamic";
// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const LoadingScreen = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      LOADING
      <Lottie loop={true} animationData={loadingLottieAnimation} />
      {/* <Lottie loop={true} animationData={loadingLottieAnimation} /> */}
    </div>
  );
};

export default LoadingScreen;
