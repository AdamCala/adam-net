"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/components/navbar.module.scss";
import { Courier_Prime } from "next/font/google";
import { usePathname } from "next/navigation";

const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

const navbar = () => {
  const pathname = usePathname();

  return (
    <div className={`${styles.navbarContainer} ${courier_prime.className}`}>
      <Link
        key="/"
        className={`${styles.navbarLink} ${
          pathname === "/" ? styles.currentLink : ""
        }`}
        href={"/"}
      >
        <p>About</p>
      </Link>
      <Link
        key="/links"
        className={`${styles.navbarLink} ${
          pathname === "/links" ? styles.currentLink : ""
        }`}
        href={"/links"}
      >
        <p>Links</p>
      </Link>
      <Link
        key="/projects"
        className={`${styles.navbarLink} ${
          pathname === "/projects" ? styles.currentLink : ""
        }`}
        href={"/projects"}
      >
        <p>Projects</p>
      </Link>
      <Link
        key="contact"
        className={`${styles.navbarLink} ${
          pathname === "/contact" ? styles.currentLink : ""
        }`}
        href={"/contact"}
      >
        <p>Contact</p>
      </Link>
    </div>
  );
};

export default navbar;
