import React from "react";
import "./ClientScroll.css";
// import LogoImg1 from "./Meezan-bank.png";
import LogoImg2 from "./HabibMetro-1024x141 (1).png";
import LogoImg3 from "./74.png";
import LogoImg4 from "./Silkbank_logo.png";
import LogoImg5 from "./29 - Copy.png";
import LogoImg8 from "./ubl.png";
import LogoImg7 from "./JS_.png";
import LogoImg6 from "./Bank-Alfalah-Logo-1024x711.png";
// import LogoImg9 from "./118.png";
// import LogoImg10 from "./a.png";
import LogoImg11 from "./b.jpg";
import LogoImg12 from "./c.jpg";
import LogoImg13 from "./d.png";

const ClientScroll = () => {
  const logosWithStyles = [
    // { src: LogoImg1, style: { width: "280px", height: "auto" } },
    {
      src: LogoImg2,
      style: { width: "350px", height: "auto", marginTop: "100px" },
    },
    {
      src: LogoImg3,
      style: { width: "350px", height: "auto", marginTop: "90px" },
    },
    {
      src: LogoImg4,
      style: { width: "550px", height: "auto", marginTop: "70px" },
    },
    {
      src: LogoImg5,
      style: { width: "320px", height: "auto", marginTop: "70px" },
    },
    {
      src: LogoImg8,
      style: { width: "180px", height: "auto", marginTop: "65px" },
    },
    {
      src: LogoImg7,
      style: { width: "250px", height: "auto", marginTop: "60px" },
    },
    {
      src: LogoImg6,
      style: { width: "280px", height: "auto", marginTop: "45px" },
    },
    // {
    //   src: LogoImg9,
    //   style: { width: "350px", height: "auto", marginTop: "80px" },
    // },
    // {
    //   src: LogoImg10,
    //   style: { width: "180px", height: "auto", marginTop: "65px" },
    // },
    {
      src: LogoImg11,
      style: { width: "180px", height: "auto", marginTop: "65px" },
    },
    {
      src: LogoImg12,
      style: { width: "180px", height: "auto", marginTop: "65px" },
    },
    {
      src: LogoImg13,
      style: { width: "180px", height: "auto", marginTop: "65px" },
    },
  ];

  return (
    <div className="client-scroll-container">
      <h2 className="clients-heading">Our Clients</h2>
      <div className="client-scroll-wrapper">
        {logosWithStyles.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img
              src={logo.src}
              alt={`Client Logo ${index + 1}`}
              className="logo-img"
              style={logo.style}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientScroll;
