// import React from "react";
// import "./styles/order.css";
// // import Logo from "/Photos/Asia Villa-1.png";
// function Order() {
//   return (
//     <div className="order">
//       <div className="middleimage">
//         <img src="/Photos/Asia Villa-1.png" alt="Logo" />
//       </div>
//       <div className="addresscontainer">

//       </div>
//     </div>
//   );
// }

// export default Order;
import React from "react";
import "./styles/order.css";
import Nav from "../Component/NavBar/Nav";
import Footer from "../Component/footer/Footer";
import store from "../Services/store";
// import { Link } from "react-router-dom";
function Order() {
  const handleLinkClick = (link) => {
    // alert(`Clicked on ${link} I Know what you are trying🫵😂`);
    // <Link to={link}></Link>;
    window.location.href = `${link}`;
  };

  const storeSorted = [...store].sort((a, b) => a.No - b.No);

  return (
    <>
      <Nav />
      <div className="order">
        <div className="image-container">
          <img src="/Photos/Asia Villa-1.png" alt="Background" />
          {/* <img
            className="image2"
            src="/Photos/AsiaVilla.jpg"
            alt="Background"
          /> */}
        </div>
        {storeSorted.map((item) => (
          <div
            key={item.id}
            className="linkContainerStyle"
            onClick={() => handleLinkClick(item.Link)}
          >
            <p>{item.Name}</p>
            <p>{item.Address}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Order;
