import React from "react";
import styles from "../styles/TopNav.module.css";

const TopNav = () => {
  return (
    <section className={styles.topNavContainer}>
      <div className={styles.left}>
        <a></a>
        <a></a>
        <h2></h2>
      </div>
      <div className={styles.user}>
        <div className={styles.userContainer}>
          <img src="spotify-profile-pic.jpg" className={styles.profilePic}/>
          <p>Trina</p>
          {/* icon */}
        </div>
      </div>
    </section>
  );
};

export default TopNav;
