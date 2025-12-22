import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

const useScrollDirection = () => {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState("down");
  const [lastY, setLastY] = useState(0);
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastY) setDirection("down");
      if (latest < lastY) setDirection("up");
      setLastY(latest);
    });
  }, [scrollY, lastY]);
  return direction;
};
export default useScrollDirection;
