import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  // Initialize state with the current window width
  const [width, setWidth] = useState(window?.innerWidth);
  const [screenType, setScreenType] = useState(
    getScreenType(window?.innerWidth)
  );

  useEffect(() => {
    // Define a handler function to update the width and screen type state
    const handleResize = () => {
      if (typeof window != "undefined") {
        const newWidth = window?.innerWidth;
        setWidth(newWidth);
        setScreenType(getScreenType(newWidth));
      }
    };

    // Add event listener for window resize
    window?.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, screenType };
};

// Function to determine screen type based on width
const getScreenType = (width: number) => {
  if (width < 768) {
    return ScreenType.MOBILE;
  } else if (width >= 768 && width < 992) {
    return ScreenType.TABLET;
  } else {
    return ScreenType.LAPTOP;
  }
};

export default useWindowDimensions;

export const ScreenType = {
  MOBILE: "mobile",
  TABLET: "tablet",
  LAPTOP: "laptop",
};

// how to use
// const { width, screenType } = useWindowDimensions();
