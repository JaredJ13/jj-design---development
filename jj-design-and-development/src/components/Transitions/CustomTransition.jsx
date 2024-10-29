import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import { Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function CustomTransition({ type, direction, children }) {
  // Add initial mount state
  const [isMounted, setIsMounted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Determine if we should show the transition
  const shouldShow = isMounted && inView;

  if (type === "fade") {
    return (
      <>
        <Fade in={shouldShow} timeout={2000}>
          <div ref={ref}>{children}</div>
        </Fade>
      </>
    );
  } else if (type === "slide") {
    return (
      <>
        <Slide direction={direction} in={shouldShow} timeout={2500}>
          <div ref={ref}>{children}</div>
        </Slide>
      </>
    );
  }
}
