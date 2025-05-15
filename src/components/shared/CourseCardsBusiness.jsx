import React from "react";
import style from "./CourseCardsBusiness.module.scss";
import { Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import Tooltip from "@mui/material/Tooltip";

import { Lock } from "react-feather";

export default function CourseCardBusiness({ course, bundle, isStaticCards }) {
  const navigate = useNavigate();

  function getTooltipText(course) {
    if (course.status === 0) {
      return `Course is locked`;
    } else {
      return "";
    }
  }

  return (
    <Grow in={true}>
      <Tooltip
        title={getTooltipText(course)}
        placement="bottom-end"
        PopperProps={{ disablePortal: true }}
      >
        <div
          className={clsx(
            style.wrapper,
            isStaticCards && style.staticCard,
            !course.status && style.noPointer
          )}
          key={course._id}
          // onClick={() => {
          //   if (course.status) {
          //     navigate(`/info/course/${course._id}`);
          //   }
          // }}
        >
          <div
            className={`${style.cardImage} ${
              !course.img_url ? style.disabledCard : null
            }`}
          >
            {course.img_url ? <img src={course.img_url} alt="" /> : null}
          </div>
          <div className={style.text}>
            <div className={style.cardTitle}>
              <p>{course.name}</p>
              {/* <img src={stars} alt="" /> */}
              {/* <div
                className={style.hours}
                style={{
                  backgroundColor: bundle.backgroundColor,
                  color: bundle.colorTheme,
                }}
              >
                {course.hours} hours
              </div> */}
            </div>
            {/* <div className={style.desc}>
              <p>{course.description.short}</p>
            </div> */}
            <div className={style.controller}>
              <a
                style={{
                  backgroundColor: bundle.colorTheme,
                  cursor: "pointer",
                  // opacity: 0.8,
                  // width: course.status === 0 ? "70%" : null,
                }}
                target="_blank"
                rel="noreferrer"
                href={course?.course_link}
              >
                Know More
              </a>
              {/* {course.status === 0 ? (
                <div
                  className={style.locked}
                  style={{
                    borderColor: bundle.colorTheme,
                    color: bundle.colorTheme,
                  }}
                >
                  <Lock />
                </div>
              ) : null} */}
            </div>
          </div>
        </div>
      </Tooltip>
    </Grow>
  );
}
