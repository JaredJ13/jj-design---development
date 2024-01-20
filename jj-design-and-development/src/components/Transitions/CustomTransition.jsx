import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import { Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function CustomTransition({ type, direction, children }) {
  // only trigger once when the component comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  if (type == "fade") {
    return (
      <>
        <Fade in={inView} timeout={2000}>
          <div ref={ref}>{children}</div>
        </Fade>
      </>
    );
  } else if (type == "slide") {
    return (
      <>
        <Slide direction={direction} in={inView} timeout={2500}>
          <div ref={ref}>{children}</div>
        </Slide>
      </>
    );
  }
}
