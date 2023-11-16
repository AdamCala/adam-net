import React from "react";
import styles from "@/styles/index.module.scss";
import { Fascinate_Inline } from "next/font/google";

const fascinate_inline = Fascinate_Inline({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className="main">
      <div
        className={`${fascinate_inline.className} ${styles.flagAdamContainer}`}
      >
        <p className={`${styles.flagAdamFirst} `}>Adam Cala</p>
        <p className={`${styles.flagAdamSecond} `}>Adam Cala</p>
      </div>
    </div>
  );
};

export default page;
