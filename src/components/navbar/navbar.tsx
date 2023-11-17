import React from "react";
import Link from "next/link";
import styles from "@/styles/components/navbar.module.scss";
import { Courier_Prime } from "next/font/google";

const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

const navbar = () => {
  return (
    <div className={`${styles.navbarContainer} ${courier_prime.className}`}>
      <Link className={`${styles.navbarLink}`} href={"/links"}>
        <p>Links</p>
      </Link>
      <Link className={`${styles.navbarLink}`} href={"/projects"}>
        <p>Projects</p>
      </Link>
      <Link className={`${styles.navbarLink}`} href={"/contact"}>
        <p> Contact</p>
      </Link>
    </div>
  );
};

export default navbar;
