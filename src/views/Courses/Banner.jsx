import React from "react";
import styles from "./Banner.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import rocket from "@/assets/images/landing/rocket.png";
import slide1 from "@/assets/images/landing/slide1.svg";
import slide4 from "@/assets/images/landing/slide4.svg";

import odishaHack from "@/assets/images/courses/jayaho_4.png";
import roadmap from "@/assets/images/roadmap.png";

import useStore from "@/stores/AppStore";

SwiperCore.use([Pagination, Autoplay]);

export default function Banner() {
  // const { setIsOpenHackModal } = useStore((state) => ({
  //   setIsOpenHackModal: state.setIsOpenHackModal,
  // }));

  function onClick() {
    // setIsOpenHackModal(true);
    window.open("https://pages.razorpay.com/jayaho-bihar-hackathon");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.bannerInfo}>
        <div className={styles.bannerText}>
          <div className={styles.main}>
            <div> Prepare yourself for an </div>
            <div>
              Extraordinary Future
              <span>{/* <img src={rocket} alt="rocket-graphic" /> */}</span>
            </div>
          </div>
        </div>

        <div className={styles.bannerCarousel}>
          <Swiper
            centeredSlides
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <div
                style={{ cursor: "pointer" }}
                // className={styles.slide}
              >
                <img src={roadmap} alt="" />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={styles.slide}>
                <img src={slide1} alt="" />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
