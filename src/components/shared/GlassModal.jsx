import React from "react";
import style from "./GlassModal.module.scss";

// import modalImage from "@/assets/images/entrepreneurs/modalImage.png";

// import { FiX } from "react-icons/fi";

export default function GlassModal(props) {
  return (
    props.isVisible && (
      <div className={style.backdrop}>
        <div className={style.container}>
          <div className={style.sidebar}>
            <div className={style.image}>
              <img src={props.data.sidebarImage} alt="" />
            </div>

            {props.type === "school-reg" ? (
              <p className={style.sidebarHeading}>{"School Registrations"}</p>
            ) : (
              <p className={style.sidebarHeading}>{"Jayaho Hackathon"}</p>
            )}

            {props.type === "school-reg" ? (
              <div className={style.steps}>
                <p>Enquire about Nvedika School Registrations</p>
              </div>
            ) : (
              <>
                {props.data.sidebarSteps && (
                  <div className={style.steps}>
                    <p>Team Nvedika brings you a Hackathon For Next Gen Kids</p>
                  </div>
                )}
              </>
            )}

            <div className={style.sidebarFooter}>
              <p>{props.data.sidebarFooterText}</p>
            </div>
          </div>
          <div className={style.content}>
            {/* <div className={style.header}>
              <button onClick={props.onClose}>x</button>
            </div> */}
            <div className={style.mainContent}>{props.children}</div>
          </div>
        </div>
      </div>
    )
  );
}
