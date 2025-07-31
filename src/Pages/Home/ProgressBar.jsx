import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Calculate the scroll position and the section height
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollY = scrollPosition + window.innerHeight;

      // Calculate the scroll percentage for the current section
      const progress = ((scrollY - sectionTop) / sectionHeight) * 100;

      // Ensure progress stays between 0% and 100%
      if (progress >= 0 && progress <= 100) {
        setScrollPercentage(progress);
      } else if (progress > 100) {
        setScrollPercentage(100);
      } else {
        setScrollPercentage(0);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <h2 className="header">Education</h2>
        <div className="progress-section" ref={sectionRef}  id="ProgressBar">
      <div className="progress-wrapper">
        <div className="progress-line">
          {/* The progress fill animation */}
          <motion.div
            className="progress-fill"
            style={{ height: `${scrollPercentage}%` }}
            initial={{ height: "0%" }}
            animate={{ height: `${scrollPercentage}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="milestones">
          <span className="milestone ssc">SSC 
          <br></br>CGPA:9.20
            <br/>2020 Lakshmi synergy school</span>
          <span className="milestone intermediate">Intermediate
          <br></br>CGPA:9.00
          <br/>2020-22 Rajiv Gandhi university of knowledge technologies,srikakulam
          </span>
          <span className="milestone engineering">Engineering
          <br></br>Year:4th
          <br/>2020-26 Rajiv Gandhi university of knowledge technologies,srikakulam
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProgressBar;
