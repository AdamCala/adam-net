import React from "react";
import styles from "@/styles/components/footer.module.scss";
import { Courier_Prime } from "next/font/google";
import Link from "next/link";

const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

const footer = () => {
  return (
    <div className={`${styles.footerContainer} ${courier_prime.className}`}>
      <p className={`${styles.footer}`}>
        Adam Cała 2023 | source code on{" "}
        <Link target="_blank" href={"https://github.com/AdamCala/adam-net"}>
          Github
        </Link>
      </p>
    </div>
  );
};

export default footer;
