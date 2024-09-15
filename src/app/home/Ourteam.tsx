"use client";
import React, { useState } from "react";
import styles from "./Ourteamcss.module.css";
import Biocard from "../components/Biocard";
import data from "../schema/team";

const Ourteam = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle view

  // Toggle between showing all or limited team members
  const toggleShowTeam = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="ourteam" className={styles.ourteam}>
      <header className={styles.header}>Our Team</header>

      <div className={styles.cardholder}>
        {/* Conditionally show limited or all team members */}
        {data.slice(0, showAll ? data.length : 4).map((item, index) => (
          <div className={styles.card} key={index}>
            <Biocard
              id={item.id}
              name={item.name}
              role={item.role}
              description={item.description}
              facebooklink={item.facebooklink}
              instalink={item.instalink}
              twitterlink={item.twitterlink}
              email={item.email}
              linkedin={item.linkedin}
              imgsource={item.imgsource}
            />
          </div>
        ))}
      </div>

      {/* Button to toggle between showing more or less team members */}
      <div className={styles.viewmorecontainer}>
        <button className={styles.viewMoreButton} onClick={toggleShowTeam}>
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Ourteam;
