import React, { useEffect, useState } from "react";
import style from "./CourseTabs.module.scss";

import ClipLoader from "react-spinners/BarLoader";
import clsx from "clsx";

import BundleContainer from "@/components/shared/BundleContainer";
import Preloader from "@/components/shared/Preloader";

import { useBundleCourses } from "@/contexts/AllContexts";

export default function CourseTabs({ allowSwipe }) {
  const [allBundles, setAllBundles] = useState(null);
  const [selectedBundle, setSelectedBundle] = useState(null);

  const BundleCourses = useBundleCourses();

  function toggleBundle(bundle) {
    setSelectedBundle(bundle);
  }

  useEffect(() => {
    if (BundleCourses.state.isLoading.bundle) return;
    if (BundleCourses.state.isLoading.courses) return;
    if (!BundleCourses.state.bundles.length) return;

    const coursesBundles = BundleCourses.state.bundles.filter(
      (f) => f.type === "COURSES"
    );
    console.log(coursesBundles);
    setAllBundles(coursesBundles);
    setSelectedBundle(coursesBundles[0]);
  }, [BundleCourses]);

  return (
    <div className={style.wrapper}>
      {allBundles && (
        <div className={style.tabs}>
          {allBundles.map((bundle, index) => (
            <button
              key={index}
              className={clsx(
                style.tab,
                bundle._id === selectedBundle._id ? style.activeTab : null
              )}
              onClick={toggleBundle.bind(this, bundle)}
            >
              {bundle.name}
            </button>
          ))}
        </div>
      )}
      {BundleCourses.state.bundles.length &&
      BundleCourses.state.isLoading.bundle ? (
        <Preloader />
      ) : (
        <>
          {allBundles && selectedBundle ? (
            selectedBundle &&
            selectedBundle.isLoaded && (
              <BundleContainer
                options={{
                  type: "HOME",
                  allowSwipe: allowSwipe,
                  showHeadingSlide: false,
                }}
                key={selectedBundle._id}
                bundle={selectedBundle}
              />
            )
          ) : (
            <div
              style={{
                display: "flex",
                height: "250px",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ClipLoader color={"#6a2c70"} size={10} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
