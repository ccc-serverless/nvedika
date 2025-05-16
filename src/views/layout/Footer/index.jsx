import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

// import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "@/assets/images/landing/logo.png";
import fbdark from "@/assets/images/landing/facebook.svg";
import insta from "@/assets/images/landing/instagram.svg";
import twitter from "@/assets/images/landing/twitter.svg";
import links from "@/utils/links.json";

import { useBundleCourses } from "@/contexts/AllContexts";

const LINKS = [
  {
    heading: "home",
    headingRoute: "/home",
  },
  // {
  //   heading: "our courses",
  //   headingRoute: "/courses",
  //   childrenRoutes: true,
  // },
  // {
  //   heading: "for schools",
  //   headingRoute: "/schools",
  // },
  // {
  //   heading: "for entrepreneurs",
  //   headingRoute: "/entrepreneurs",
  // },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [allBundles, setAllBundles] = useState(null);

  const BundleCourses = useBundleCourses();

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  function openHome() {
    if (location.pathname === "/home") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
      navigate("/");
    }
  }

  function openTerms() {
    if (location.pathname === "/terms-and-conditions") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
      navigate("/terms-and-conditions");
    }
  }

  function navigateTo(link) {
    window.scrollTo(0, 0);
    navigate(link);
  }

  function linkTypeCheck(link) {
    if (link.heading === "home") {
      openHome();
    } else {
      navigate(link.headingRoute);
    }
  }

  useEffect(() => {
    if (
      !BundleCourses.state.isLoading.bundle &&
      BundleCourses.state.bundles.length
    ) {
      setAllBundles(BundleCourses.state.bundles);
    }
  }, [BundleCourses]);

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.logo} onClick={openHome}>
        <img src={logo} />
      </div>
      <div className={styles.midFooter}>
        {LINKS.map((link, index) => (
          <div key={index} className={styles.section}>
            <p
              className={styles.heading}
              onClick={linkTypeCheck.bind(this, link)}
            >
              {link.heading}
            </p>
            {/* <div className={styles.children}>
              {link.childrenRoutes &&
                allBundles &&
                allBundles.map((item, index) => (
                  <HashLink
                    key={index}
                    smooth
                    to={`/courses/#${item.name.toLowerCase().replace(/\s+/, "")}`}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <p>{item.name}</p>
                  </HashLink>
                ))}
            </div> */}
          </div>
        ))}
      </div>
      <div className={styles.socialWrapper}>
        <p>Follow us</p>
        <div className={styles.socialLinks}>
          <div className={styles.socialLink}>
            <a
              href={links.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbdark} alt="" />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a
              href={links.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="" />
            </a>
          </div>
          <div className={styles.socialLink}>
            <a
              href={links.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyrightWrapper}>
        <p>Copyright © {new Date().getFullYear()} nvedika.com</p>
        <p>
          Contact: <a href="mailto:info@nvedika.com">info@nvedika.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
