import React, { useEffect } from "react";
import styles from "./FutureSkills.module.scss";

import Banner from "./Banner";
import BundlesContainer from "components/shared/BundlesContainer";
import CourseTabs from "./CourseTabs";
import Register from "views/Hackathon-Registration/Register";

import useStore from "stores/AppStore";

export default function OurCoursesIndex({ isModalOpen }) {
  const { isOpenHackModal, setIsOpenHackModal } = useStore((state) => ({
    isOpenHackModal: state.isOpenHackModal,
    setIsOpenHackModal: state.setIsOpenHackModal,
  }));

  useEffect(() => {
    if (isModalOpen) setIsOpenHackModal(true);
  }, [isModalOpen]);

  return (
    <div className={styles.wrapper}>
      <Banner />

      <header>
        <h2>Technical Skill Courses</h2>
        <div>A plug and play platform for schools to implement 21st century technical skills as per NEP 2020</div>
      </header>

      <BundlesContainer options={{ type: "COURSES", allowSwipe: true, showHeadingSlide: true }} />

      <Register isOpen={isOpenHackModal} onClose={() => {}} />
      {/* <CourseTabs /> */}
    </div>
  );
}
