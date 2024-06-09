import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  // Initialize state with undefined to avoid errors during SSR
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined);
  const [screenType, setScreenType] = useState(
    typeof window !== 'undefined' ? getScreenType(window.innerWidth) : undefined
  );

  useEffect(() => {
    // Early return if window is undefined (i.e., during SSR)
    if (typeof window === 'undefined') return;

    // Define a handler function to update the width and screen type state
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setScreenType(getScreenType(newWidth));
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, screenType };
};

// Function to determine screen type based on width
const getScreenType = (width:number) => {
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
