"use client";
import React, { useState } from "react";
import styles from "./Gallerycss.module.css";
import data from "../schema/gallery";
import Image from "next/image";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle between showing all images or a limited number
  const toggleShowImages = () => {
    setShowAll(!showAll); // Toggle the showAll state
  };

  return (
    <div id="gallery" className={styles.gallery}>
      <header className={styles.header}>Gallery</header>

      <div className={styles.body}>
        {/* Conditionally show limited or all images */}
        {data.slice(0, showAll ? data.length : 6).map((item, index) => {
          return (
            <div
              className={`${styles.pics} ${item.span ? styles["span-2"] : ""}`}
              key={index}
            >
              <Image
                src={item.src}
                className={styles.image}
                alt=""
                height={500}
                width={500}
              />
              <div className={styles.caption}>{item.caption}</div>
            </div>
          );
        })}
      </div>

      {/* Button to toggle between showing more or less images */}
      <div className={styles.viewmorecontainer}>
        <button className={styles.viewMoreButton} onClick={toggleShowImages}>
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
