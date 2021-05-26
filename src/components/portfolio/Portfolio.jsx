import React from "react";
import { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  // for the purpose of the active option on the menu
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
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
