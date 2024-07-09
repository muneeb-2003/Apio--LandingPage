import React from "react";
import "./Footer.css";
import LogoImg from "./companylogo.png";
const Footer = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <footer className="footer">
      <div className="column">
        <img src={LogoImg} alt="Company Logo" className="logo" />
      </div>
      <div className="column">
        <h3>Company Links</h3>
        <ul>
          <li>
            <a href="https://www.telecard.com.pk/">Our Website</a>
          </li>
          <li>
            <a href="https://www.telecard.com.pk/our-vision-mission/">
              Who We Are
            </a>
          </li>
          <li>
            <a href="https://www.telecard.com.pk/financials/">Our Financials</a>
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>© 2021. Telecard Limited. All Rights Reserved.</p>
        </ul>
      </div>
      <div className="column">
        <h3>FAQ</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="question">Question:</label>
          <textarea id="question" name="question" rows="3" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
