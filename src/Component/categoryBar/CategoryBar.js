// import React, { useEffect, useState, useRef } from "react";
// import "./CategoryBar.css";

// function CategoryBar({ groupedMenu }) {
//   const categoryBarRef = useRef([]);
//   categoryBarRef.current = Object.keys(groupedMenu);

//   const [activeSection, setActiveSection] = useState("");

//   const scrollToElement = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setActiveSection(id);
//   };

//   const handleScroll = () => {
//     const categoryBar = categoryBarRef.current;

//     for (const item of categoryBar) {
//       const section = document.getElementById(item);
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//           setActiveSection((prevActiveSection) => {
//             console.log("Active Section:", item);
//             return item;
//           });
//           break;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="categories">
//         <div className="button-container">
//           {categoryBarRef.current.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToElement(item)}
//               style={{
//                 backgroundColor: activeSection === item ? "#e5007e" : "",
//               }}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryBar;
import React from "react";
import "./CategoryBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
function CategoryBar({ groupedMenu }) {
  const categoryBar = Object.keys(groupedMenu);
  return (
    <div>
      <div className="categories">
        <div className="button-container">
          {categoryBar.map((item) => (
            <button key={item}>
              {/* {item} */}
              <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
