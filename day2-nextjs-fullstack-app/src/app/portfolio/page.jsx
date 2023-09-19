import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import pic1 from "public/illustration.png"

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          {/* <Image src={pic1} className={styles.pic1}></Image> */}
          {/* it will be cummbersome to use multiple Images and style them one by one or can use nth child or can use map method with Image */}
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;