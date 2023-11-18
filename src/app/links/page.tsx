"use client";
import styles from "@/styles/links/index.module.scss";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  });
  return (
    <>
      <div className={`${styles.main}`}></div>
      <div className={`${styles.about}`}></div>
    </>
  );
};

export default page;
