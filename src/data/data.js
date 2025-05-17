import salesforceBanner from "../assets/images/courses/salesforce-banner.png";
import servicenowBanner from "../assets/images/courses/servicenow-banner.png";
import awsBanner from "../assets/images/courses/aws-banner.png";
import fortinet from "../assets/images/courses/fortinet-banner.png";
import sfCertiOne from "../assets/images/courses/sf-certi-one.png";
import sfCertiTwo from "../assets/images/courses/sf-certi-two.png";
import sfCertiThree from "../assets/images/courses/sf-certi-three.png";

import awsCertiOne from "../assets/images/courses/aws-certi-one.png";
import awsCertiTwo from "../assets/images/courses/aws-certi-two.png";
import awsCertiThree from "../assets/images/courses/aws-certi-three.png";

import snCertiTwo from "../assets/images/courses/sn-certi-two.png";
import snCertiThree from "../assets/images/courses/sn-certi-three.png";

import fortinetCertiOne from "../assets/images/courses/fortinet-certi-one.png";
import fortinetCertiTwo from "../assets/images/courses/fortinet-certi-two.png";
import fortinetCertiThree from "../assets/images/courses/fortinet-certi-three.png";
import fortinetCertiFour from "../assets/images/courses/fortinet-certi-four.png";
import fortinetCertiFive from "../assets/images/courses/fortinet-certi-five.png";

export const data = {
  all: [
    {
      _id: "63e49996caab6b501a9dcb9f",
      name: "Salesforce",
      order: 1,
      status: 1,
      colorTheme: "#280F8F",
      levelImgUrl: salesforceBanner,
      backgroundColor: "rgba(17, 118, 174, 0.1)",
      type: "COURSES",
      isLoaded: true,
      courses: [
        {
          _id: "608d976b5266a911a12965f4",
          name: "Salesforce Certified Administrator",
          course_link:
            "https://drive.google.com/file/d/1uz8FEuAqYDpIKwFvfpJqmjy4_NyQZ2Sl/view",
          bundle: "63e49996caab6b501a9dcb9f",
          img_url: sfCertiOne,
        },
        {
          _id: "606d97f8c2e3de2e66ed318a",
          name: "Salesforce Certified Platform Developer",
          course_link:
            "https://drive.google.com/file/d/1rt-6hWE8aU-aiybPYTBXCxQVyqOsn_jV/view",
          bundle: "63e49996caab6b501a9dcb9f",
          img_url: sfCertiTwo,
        },
        {
          _id: "606ddfb8783dab59377d6e45",
          name: "Platform App Builder Certification",
          bundle: "63e49996caab6b501a9dcb9f",
          course_link:
            "https://drive.google.com/file/d/1GkTz2U6t5TV2e0fy1aeSKu7zTHLNtc0y/view",
          img_url: sfCertiThree,
        },
      ],
    },
    {
      _id: "63e49a07caab6b501a9dcba0",
      name: "Service Now",
      order: 2,
      status: 0,
      colorTheme: "#537568",
      levelImgUrl: servicenowBanner,
      backgroundColor: "rgba(17, 118, 174, 0.1)",
      type: "COURSES",
      isLoaded: true,
      courses: [
        {
          _id: "606dd46a8655da5146199d21",
          name: "ServiceNow - Fundamentals",
          course_link:
            "https://learning.servicenow.com/lxp/en/credentials?id=kb_article_view&sys_kb_id=8e85a58f97e5a5507f7070871153af38",
          bundle: "63e49a07caab6b501a9dcba0",

          img_url: snCertiTwo,
        },
        {
          _id: "60f92f6209a56f1c247fa51c",
          name: "ServiceNow - Certified System Administrator",
          course_link:
            "https://learning.servicenow.com/lxp/en/credentials?id=kb_article_view&sys_kb_id=8e85a58f97e5a5507f7070871153af38",
          bundle: "63e49a07caab6b501a9dcba0",
          img_url: snCertiTwo,
        },
        {
          _id: "60a51ee39e4b20246babb9c5",
          name: "ServiceNow - Certified Application Developer",
          course_link:
            "https://learning.servicenow.com/lxp/en/credentials?id=kb_article_view&sys_kb_id=1052565087792910bfe94088dabb35b6",
          bundle: "63e49a07caab6b501a9dcba0",
          img_url: snCertiThree,
        },
      ],
    },
    {
      _id: "63e49a48caab6b501a9dcba1",
      name: "AWS",
      order: 3,
      status: 0,
      colorTheme: "#1176AE",
      levelImgUrl: awsBanner,
      backgroundColor: "rgba(17, 118, 174, 0.1)",
      type: "COURSES",
      isLoaded: true,
      courses: [
        {
          _id: "60a89401ff4ca91573480eb2",
          name: "AWS Certified Cloud Practioner",
          bundle: "63e49a48caab6b501a9dcba1",
          course_link:
            "https://drive.google.com/file/d/18Nn-Y3wLWFDsRiXCcXH2hSEiEK_KJ-Nt/view",
          img_url: awsCertiOne,
          bundleName: "Coding",
        },
        {
          _id: "60a51f519e4b20246babb9c6",
          name: "AWS Certified Developer - Associate",
          bundle: "63e49a48caab6b501a9dcba1",
          course_link:
            "https://drive.google.com/file/d/1HD121z-C3o6Hmnj5wEe-30z95KHT89ik/view",
          price: 50,
          order: 2,
          hours: 24,
          modules: [
            {
              name: "Overview",
              order: 1,
              items: [
                {
                  slNo: 1,
                  type: "overview",
                  uid: "i_aC7CUf",
                },
              ],
              uid: "m_2Q8eaB",
            },
          ],
          description: {
            summary: "",
            objectives: [""],
            short:
              "Explore usage of natural language to solve problem sequentially",
          },
          img_url: awsCertiTwo,
          status: 0,
          priceCurrency: "USD",
          isActive: true,
          bundleName: "Coding",
        },
        {
          _id: "606dd4088655da5146199d20",
          name: "AWS Certified Solution Architect - Associate",
          bundle: "63e49a48caab6b501a9dcba1",
          course_link:
            "https://drive.google.com/file/d/1Vfn_iNWlM9cy7tst1jZm5DY9FNlFVrzu/view",
          img_url: awsCertiThree,
        },
      ],
    },
    {
      _id: "63e49a76caab6b501a9dcba2",
      name: "Fortinet Courses",
      order: 4,
      status: 0,
      colorTheme: "#2D2D2D",
      levelImgUrl: fortinet,
      backgroundColor: "rgba(17, 118, 174, 0.1)",
      type: "COURSES",
      isLoaded: true,
      courses: [
        {
          _id: "60f932acd8fb5a21b527ef3f",
          name: "Fortinet Certified Fundamentals",
          bundle: "63e49a76caab6b501a9dcba2",
          course_link:
            "https://training.fortinet.com/local/staticpage/view.php?page=fcf_cybersecurity",
          img_url: fortinetCertiOne,
          status: 0,
          priceCurrency: "USD",
          isActive: true,
          bundleName: "Competitive Coding",
        },
        {
          _id: "60f932d7d8fb5a21b527ef40",
          name: "Fortinet Certified Associate",
          bundle: "63e49a76caab6b501a9dcba2",
          course_link:
            "https://training.fortinet.com/local/staticpage/view.php?page=fca_cybersecurity",
          img_url: fortinetCertiTwo,
        },
        {
          _id: "60f932e5d8fb5a21b527ef41",
          name: "Fortinet Certified Professional",
          bundle: "63e49a76caab6b501a9dcba2",
          course_link:
            "https://training.fortinet.com/local/staticpage/view.php?page=fcp_security_operations",
          img_url: fortinetCertiThree,
        },
        {
          _id: "60f932e5d8fb5a21b527ef42",
          name: "Fortinet Solution Specialist",
          bundle: "63e49a76caab6b501a9dcba2",
          course_link:
            "https://training.fortinet.com/local/staticpage/view.php?page=fcss_security_operations",
          img_url: fortinetCertiFour,
        },
        {
          _id: "60f932e5d8fb5a21b527ef43",
          name: "Fortinet Expert",
          bundle: "63e49a76caab6b501a9dcba2",
          course_link:
            "https://training.fortinet.com/local/staticpage/view.php?page=fcx_cybersecurity",
          img_url: fortinetCertiFive,
        },
      ],
    },
  ],
};
