import React from "react";
import styles from "./index.module.scss";

import HeroSection from "./HeroSection";

export default function HomePageIndex() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />

      {/* <Roadmap /> */}
    </div>
  );
}
