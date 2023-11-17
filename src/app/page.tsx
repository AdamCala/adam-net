"use client";

import React, { useEffect, useState } from "react";
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

  function handleClick() {
    setPageState((prevState) => (prevState === "bottom" ? "top" : "bottom"));
  }

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
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <div className={`${styles.about}`}></div>
    </>
  );
};

export default page;
