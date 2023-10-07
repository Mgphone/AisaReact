// export default CategoryBar;
import React, { useState, useEffect } from "react";
import "./CategoryBar.css";
import { Link } from "react-scroll";
function CategoryBar({ groupedMenu }) {
  const categoryBar = Object.keys(groupedMenu);
  const [activeButton, setAciveButton] = useState("");
  const handleButtonActive = (to) => {
    setAciveButton(to);
  };

  useEffect(() => {
    // When the active button changes, scroll to ensure it's in view
    if (activeButton) {
      const container = document.querySelector(".button-container");
      // const activeButtonElement = document.querySelector(
      //   `[to='${activeButton}']`
      // );
      const activeButtonElement = document.querySelector(".button-active");
      if (container && activeButtonElement) {
        const containerWidth = container.clientWidth;
        const activeButtonLeft = activeButtonElement.offsetLeft;
        const activeButtonWidth = activeButtonElement.offsetWidth;

        // Calculate the scroll position to center the active button
        const scrollLeft =
          activeButtonLeft - containerWidth / 2 + activeButtonWidth / 2;

        // Scroll to the calculated position
        container.scrollLeft = scrollLeft;
      }
    }
  }, [activeButton]);

  return (
    <>
      <div className="categories">
        <div className="button-container">
          {categoryBar.map((item) => (
            <button
              key={item}
              className={`button-default ${
                item === activeButton ? "button-active" : ""
              }`}
            >
              {/* {item} */}
              <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onSetActive={handleButtonActive}
              >
                {item}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryBar;
