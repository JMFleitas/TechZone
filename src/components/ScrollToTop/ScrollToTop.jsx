import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 2); // Reubica el scroll al inicio vertical y horizontal
  }, [pathname]);

  return null;
};

export default ScrollToTop;
