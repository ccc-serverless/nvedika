import React, { useState, useEffect } from "react";
import style from "./BundlesContainer.module.scss";

import ClipLoader from "react-spinners/BarLoader";

import BundleContainer from "components/shared/BundleContainer";
import { useBundleCourses } from "contexts/AllContexts";
import clsx from "clsx";
import { ChevronDown } from "react-feather";
import { data } from "data/data";

export default function BundlesContainer(props) {
  const { showHeadingSlide, type, allowSwipe } = props.options;
  const BundleCourses = useBundleCourses();

  const [tabs] = useState([
    { key: "1-5", name: "Class 1 to 5" },
    { key: "6-8", name: "Class 6 to 8" },
    { key: "9-10", name: "Class 9 & 10" },
    { key: "11-12", name: "Class 11 & 12" },
  ]);

  const [bundlesByCat, setBundlesByCat] = useState(null);
  const [activeTab, setActiveTab] = useState("1-5");
  const [tabColor, setTabColor] = useState(null);

  function getBundles() {
    if (!BundleCourses) return;

    let obj = {};

    if (props.noTabs) {
      const coursesBundles = BundleCourses.state.bundles.filter(
        (f) => f.type === "COURSES"
      );
      obj = { all: coursesBundles };
      setActiveTab("all");
    } else {
      obj = {
        "1-5": [],
        "6-8": [],
        "9-10": [],
        "11-12": [],
      };

      BundleCourses.state.bundles.forEach((bundle) => {
        let name = bundle.name;
        switch (name) {
          case "Class 1":
          case "Class 2":
          case "Class 3":
          case "Class 4":
          case "Class 5":
            obj["1-5"].push(bundle);
            break;

          case "Class 6":
          case "Class 7":
          case "Class 8":
            obj["6-8"].push(bundle);
            break;

          case "Class 9":
          case "Class 10":
            obj["9-10"].push(bundle);
            break;

          case "Class 11":
          case "Class 12":
            obj["11-12"].push(bundle);
            break;

          default:
            break;
        }
      });
    }

    setBundlesByCat(data);
  }

  useEffect(getBundles, [BundleCourses]);

  useEffect(() => {
    if (bundlesByCat && bundlesByCat[activeTab]) {
      setTabColor(bundlesByCat[activeTab][0]?.colorTheme);
    }
  }, [bundlesByCat, activeTab]);

  return !BundleCourses.state.isLoading.courses ? (
    <>
      <div className={style.tabsContainer}>
        {!props.noTabs && (
          <>
            {tabs.map((tab) => (
              <button
                className={clsx(
                  style.tab,
                  activeTab === tab.key && style.activeTab
                )}
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                }}
                style={{ backgroundColor: activeTab === tab.key && tabColor }}
              >
                {tab.name}
                <ChevronDown
                  style={{ fill: activeTab === tab.key && tabColor }}
                />
              </button>
            ))}
          </>
        )}
      </div>
      {bundlesByCat &&
        bundlesByCat[activeTab] &&
        bundlesByCat[activeTab].map(
          (bundle) =>
            bundle &&
            bundle.courses && (
              <div className={style.wrapper} key={bundle._id}>
                <BundleContainer
                  options={{ allowSwipe, type, showHeadingSlide }}
                  key={bundle._id}
                  bundle={bundle}
                />
              </div>
            )
        )}
    </>
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
  );
}
