"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/index.module.scss";
import { Fascinate_Inline } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import ArrowDownIcon from "@/components/icons/arrowDownIcon";

const fascinate_inline = Fascinate_Inline({
  subsets: ["latin"],
  weight: "400",
});
const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  const [pageState, setPageState] = useState("bottom");

  //   ! Scroll down on appropriate actions
  //   & Scroll down with mousewheel
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        console.log("Scrolling down");
        setPageState("top");
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  //   & Press arrow down
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        console.log("Arrow key down");
        setPageState("top");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //   & Swipe upwards on mobile
  const touchStartY = useRef<number | null>(null);
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current !== null) {
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY.current;

        if (deltaY < 0) {
          console.log("Swipe downward");
          setPageState("top");
        }

        touchStartY.current = null;
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  //   & Click on scroll down button
  function handleClick() {
    setPageState((prevState) => (prevState === "bottom" ? "top" : "bottom"));
  }

  //   ! Handle the scroll action every time pageState changes
  useEffect(() => {
    console.log(pageState);
    if (pageState == "top") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pageState]);

  return (
    <>
      <div className={`${styles.main}`}>
        <div
          className={`${fascinate_inline.className} ${styles.flagAdamContainer}`}
        >
          <div
            className={`${courier_prime.className} ${styles.subtextAdamContainer}`}
          >
            <p className={`${styles.subtextAdam}`}>I write code</p>
            <p
              id={`${styles.subtextAdamSecond}`}
              className={`${styles.subtextAdam}`}
            >
              on the internet
            </p>
          </div>
          <p className={`${styles.flagAdam} `}>Adam Cala</p>
          <div className={`${styles.scrollButton}`} onClick={handleClick}>
            <ArrowDownIcon className={`${styles.svg}}`} />
          </div>
        </div>
      </div>
      <div className={`${styles.about}`}></div>
    </>
  );
};

export default page;
