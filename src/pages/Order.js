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
function Order() {
  const linkContainerStyle = {
    width: "200px", // Adjust the width to your desired size
    height: "50px", // Adjust the height to your desired size
    backgroundColor: "lightblue", // Optional background color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px", // Optional margin for spacing between link containers
    cursor: "pointer",
  };

  const handleLinkClick = (link) => {
    // You can handle the click event for each link here
    alert(`Clicked on ${link} I Know what you are trying🫵😂`);
  };

  return (
    <>
      <Nav />
      <div className="order">
        <div className="image-container">
          <img src="/Photos/Asia Villa-1.png" alt="Background" />
          <img
            className="image2"
            src="/Photos/AsiaVilla.jpg"
            alt="Background"
          />
        </div>
        <div
          className="link-container"
          style={linkContainerStyle}
          onClick={() => handleLinkClick("Link Borough")}
        >
          Name:Borough
        </div>
        <div
          className="link-container"
          style={linkContainerStyle}
          onClick={() => handleLinkClick("Link Katherine Road")}
        >
          Name:Katherine Road
        </div>
        <div
          className="link-container"
          style={linkContainerStyle}
          onClick={() => handleLinkClick("Link Poplar")}
        >
          Name:Poplar
        </div>
        <div
          className="link-container"
          style={linkContainerStyle}
          onClick={() => handleLinkClick("Link Romford")}
        >
          Name: Romford
        </div>
        <div
          className="link-container"
          style={linkContainerStyle}
          onClick={() => handleLinkClick("Link Wood Green")}
        >
          Name: Wood Green
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;
