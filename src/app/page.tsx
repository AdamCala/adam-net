import React from "react";
import styles from "@/styles/index.module.scss";
import { Fascinate_Inline } from "next/font/google";
import { Courier_Prime } from "next/font/google";

const fascinate_inline = Fascinate_Inline({
  subsets: ["latin"],
  weight: "400",
});
const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className="main">
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
      </div>
    </div>
  );
};

export default page;
