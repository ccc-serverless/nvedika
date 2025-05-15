import React from "react";
import styles from "./BundleContainer.module.scss";

import clsx from "clsx";

import CourseCard from "./CourseCard";
import InfoCourseCard from "./InfoCourseCard";
import CourseCardsBusiness from "./CourseCardsBusiness";

export default function BundleContainer({ options, bundle }) {
  const { showHeadingSlide, allowSwipe, type } = options;

  function getId(bundle) {
    if (bundle.split(" ")) return bundle.toLowerCase().split(" ").join("");
  }

  return (
    bundle.status !== -1 &&
    bundle.status !== 3 && (
      <div id={getId(bundle.name)} className={styles.wrapper}>
        <div className={clsx(styles.cards)}>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            allowTouchMove={allowSwipe}
            id="home-camp-carousel"
          >
            {showHeadingSlide && (
              <SwiperSlide>
                <div className={styles.bundleImage}>
                  <img src={bundle.levelImgUrl} alt="" />
                </div>
              </SwiperSlide>
            )}
            {bundle.courses.map((course) => (
              <SwiperSlide key={course._id}>
                {type === "HOME" ? (
                  <InfoCourseCard course={course} bundle={bundle} />
                ) : type === "SCHOOL" ? (
                  <CourseCard
                    isStaticCards={true}
                    course={course}
                    bundle={bundle}
                  />
                ) : (
                  <CourseCardsBusiness course={course} bundle={bundle} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  );
}
