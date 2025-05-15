import React from "react";
import styles from "./FutureSkills.module.scss";

import Banner from "./Banner";
import BundlesContainer from "@/components/shared/BundlesContainer";

export default function OurCoursesIndex() {
  return (
    <div className={styles.wrapper}>
      <Banner />

      <header>
        <h2>Global Certifications</h2>
        <div>Empower your career with hands-on experience.</div>
      </header>

      <BundlesContainer
        noTabs
        options={{ type: "COURSES", allowSwipe: true, showHeadingSlide: true }}
      />
    </div>
  );
}
