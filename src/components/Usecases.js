import React from "react";
import "./usecases.css";
import UseCasesImage from "./hi.png";
import SuitableForImage from "./d.jpeg";
import Logo1 from "./51.png";
import Logo2 from "./41.png";
import Logo3 from "./31.png";
import Logo4 from "./21.png";
import Logo5 from "./10.png";
import Logo6 from "./61.png";
const TwoColumnComponent = () => {
  return (
    <div className="new-two-column-container">
      <div className="new-column use-cases">
        <div className="h2">
          <h2>Usecases</h2>
        </div>
        <div className="new-contentusecase">
          <img src={UseCasesImage} alt="Use Cases" className="new-image" />
          <div className="new-description">
            <h4>Call Bridge:</h4>
            <p>
              Facilitates seamless call transfers and conferences between
              parties.
            </p>
            <h4>Call Recording:</h4>
            <p>
              Enables recording of calls for quality assurance and training.
            </p>
            <h4>Voicemail:</h4>
            <p>Provides voicemail services for missed calls.</p>
            <h4>Auto Attendant:</h4>
            <p>Automates call routing with a virtual receptionist.</p>
            <h4>Call Analytics:</h4>
            <p>Offers detailed call analytics and reporting.</p>
          </div>
        </div>
      </div>
      <div className="new-column suitable-for">
        <div className="h2">
          <h2>Suitable for</h2>
        </div>
        <div className="new-contentusecase-1">
          <img
            src={SuitableForImage}
            alt="Suitable For"
            className="new-image"
          />
          <div className="new-description">
            <ul>
              <li>
                <img src={Logo1} alt="Logo 1" className="logo-item" />
                Banks
              </li>
              <li>
                <img src={Logo2} alt="Logo 2" className="logo-item" />
                Mkt Research
              </li>
              <li>
                <img src={Logo3} alt="Logo 3" className="logo-item" />
                E-Commerce
              </li>
              <li>
                <img src={Logo6} alt="Logo 6" className="logo-item" />
                Health Care
              </li>
              <li>
                <img src={Logo4} alt="Logo 4" className="logo-item" />
                Delivery
              </li>
              <li>
                <img src={Logo5} alt="Logo 5" className="logo-item" />
                Courier & Logistics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
