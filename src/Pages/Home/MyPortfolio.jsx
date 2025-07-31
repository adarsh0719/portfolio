import React, { useState, useEffect, useRef } from "react";
import data from "../../data/index.json";
import "./MyPortfolio.css";

export default function MyPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const portfolioItems = data?.portfolio || [];
  const containerRef = useRef(null);

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
    setShowFullDescription(false);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
    setShowFullDescription(false);
  };

  // Mobile swipe functionality
  useEffect(() => {
    const container = containerRef.current;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const threshold = 50;
      if (touchEndX < touchStartX - threshold) showNext();
      else if (touchEndX > touchStartX + threshold) showPrev();
    };

    if (window.innerWidth <= 768 && container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentIndex]);

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">Projects</h2>
        </div>
        <div className="github--button--container">
          <a
            href="https://github.com/adarsh0719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202Z"
                  fill="currentColor"
                />
              </svg>
              Visit My GitHub
            </button>
          </a>
        </div>
      </div>

      <div className="single-portfolio--container" ref={containerRef}>
        <div className="portfolio-navigation">
          <button
            className="nav-arrow left-arrow"
            onClick={showPrev}
            aria-label="Previous project"
          >
            &lt;
          </button>

          <div className="portfolio-card-wrapper">
            <div className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img
                  src={require(`../../${portfolioItems[currentIndex]?.src}`)}
                  alt={portfolioItems[currentIndex]?.title}
                />
              </div>
              <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">
                  {portfolioItems[currentIndex]?.title}
                </h3>
                <p
                  className={`text-md card-description ${
                    showFullDescription ? "" : "collapsed"
                  }`}
                >
                  {portfolioItems[currentIndex]?.description}
                </p>
                <button
                  className="read-more-btn"
                  onClick={() => setShowFullDescription((prev) => !prev)}
                >
                  {showFullDescription ? "Read less" : "Read more"}
                </button>
                <div className="portfolio--links">
                  <a
                    href={portfolioItems[currentIndex]?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio--link"
                  >
                    GitHub
                  </a>
                  <a
                    href={portfolioItems[currentIndex]?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio--link live"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            className="nav-arrow right-arrow"
            onClick={showNext}
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>

        <div className="portfolio-indicators">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setShowFullDescription(false);
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
