import React from "react";
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://w7.pngwing.com/pngs/271/19/png-transparent-starling-bank-challenger-bank-business-financial-services-bank-purple-company-violet-thumbnail.png"
            alt="bank logo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://w7.pngwing.com/pngs/271/19/png-transparent-starling-bank-challenger-bank-business-financial-services-bank-purple-company-violet-thumbnail.png"
            alt="bank logo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://w7.pngwing.com/pngs/271/19/png-transparent-starling-bank-challenger-bank-business-financial-services-bank-purple-company-violet-thumbnail.png"
            alt="bank logo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://w7.pngwing.com/pngs/271/19/png-transparent-starling-bank-challenger-bank-business-financial-services-bank-purple-company-violet-thumbnail.png"
            alt="bank logo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://w7.pngwing.com/pngs/271/19/png-transparent-starling-bank-challenger-bank-business-financial-services-bank-purple-company-violet-thumbnail.png"
            alt="bank logo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://w7.pngwing.com/pngs/271/19/png-transparent-starling-bank-challenger-bank-business-financial-services-bank-purple-company-violet-thumbnail.png"
            alt="bank logo"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
