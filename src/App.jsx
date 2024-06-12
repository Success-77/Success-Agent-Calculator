import React, { useState, useMemo } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Navbar from "./components/TopBar";

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    const clickedButton = document.querySelector(
      `.tab-button[data-tab="${tab}"]`
    );
    if (clickedButton) {
      const tabsContainer = document.querySelector(".tabs");
      const homeHeader = document.querySelector(".home-header");
      clickedButton.classList.add("clicked");
      tabsContainer.classList.add("tab-clicked");
      homeHeader.classList.add("move-header");
    }
  };

  const mtnPrices = useMemo(
    () => ({
      1: 6,
      2: 11,
      3: 16,
      4: 20,
      5: 25,
      6: 30,
      7: 35,
      8: 39,
      10: 46,
      15: 67,
      20: 89,
      25: 109,
      30: 132,
      40: 175,
      50: 215,
      100: 410,
    }),
    []
  );

  const atPrices = useMemo(
    () => ({
      1: 4.9,
      2: 7.8,
      3: 12,
      4: 14,
      5: 17,
      6: 20,
      7: 24,
      8: 27,
      10: 33,
      15: 47,
      20: 68,
      30: 100,
      40: 132,
      60: 195,
      100: 315,
    }),
    []
  );

  const vodaPrices = useMemo(
    () => ({
      1: 7.5,
      2: 13,
      3: 18,
      4: 24,
      5: 28,
      10: 52,
      15: 74,
      20: 82,
      50: 220,
      100: 400,
    }),
    []
  );

  return (
    <div className="App">
      <Navbar />
      <h3 className="home-header">Daily Sales Calculator</h3>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "MTN" ? "active" : ""}`}
          onClick={() => handleTabClick("MTN")}
          data-tab="MTN"
        >
          MTN
        </button>
        <button
          className={`tab-button ${activeTab === "AirtelTigo" ? "active" : ""}`}
          onClick={() => handleTabClick("AirtelTigo")}
          data-tab="AirtelTigo"
        >
          AirtelTigo
        </button>
        <button
          className={`tab-button ${activeTab === "Vodafone" ? "active" : ""}`}
          onClick={() => handleTabClick("Vodafone")}
          data-tab="Vodafone"
        >
          Vodafone
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "MTN" && (
          <Calculator initialAgentPrices={mtnPrices} network={"MTN"} />
        )}
        {activeTab === "AirtelTigo" && (
          <Calculator initialAgentPrices={atPrices} network={"AirtelTigo"} />
        )}
        {activeTab === "Vodafone" && (
          <Calculator initialAgentPrices={vodaPrices} network={"Vodafone"} />
        )}
      </div>
    </div>
  );
};

export default App;
