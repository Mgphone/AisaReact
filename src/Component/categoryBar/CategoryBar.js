import React, { useEffect, useState } from "react";
import "./CategoryBar.css";
function CategoryBar({ groupedMenu }) {
  const [activeSection, setActiveSection] = useState("");
  const categoryBar = Object.keys(groupedMenu);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    // Check which section is currently in view
    for (const item of categoryBar) {
      const section = document.getElementById(item);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(item);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="categories">
        <div className="button-container">
          {categoryBar.map((item) => (
            <button
              key={item}
              onClick={() => scrollToElement(item)}
              style={{
                backgroundColor: activeSection === item ? "#e5007e" : "",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
