import React, { lazy } from "react";
import "./App.css";
import { BundleCoursesContextProvider } from "@/contexts/BundleCoursesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "swiper/css"; // Core Swiper
import "swiper/css/pagination"; // Pagination module
import "swiper/css/navigation"; // Navigation module

import "./Over-Write.css";
import NavbarDark from "./views/layout/Navbar/NavbarDark";
import Footer from "./views/layout/Footer";

const Home = lazy(() => import("./views/HomePage"));
const Courses = lazy(() => import("./views/Courses/Courses"));

function App() {
  return (
    <>
      <BundleCoursesContextProvider>
        <Router>
          <NavbarDark />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
          <Footer />
        </Router>
      </BundleCoursesContextProvider>
    </>
  );
}

export default App;
