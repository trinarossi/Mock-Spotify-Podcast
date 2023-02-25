import React from "react";
import styles from "../styles/BottomPlayer.module.css";

const BottomPlayer = () => {
  return (
    <section className={styles.playerContainer}>
      <div className={styles.audioSelection}>
        <img src="" className={styles.playerImg} />
        <p className={styles.title}>Podcast Title</p>
        <p className={styles.series}>Podcast Series</p>
        {/* heart icon */}
      </div>
      <section className={styles.playerMiddle}>
        <div className={styles.playerButtons}></div>
        <div className={styles.playerBar}>
          <p>0:00</p>
          <div className={styles.barContainer}></div>
          <p>0:00</p>
        </div>
      </section>
      <div className={styles.playerRightSide}></div>
    </section>
  );
};

export default BottomPlayer;
