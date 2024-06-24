import React, { useState, useEffect, useMemo } from "react";
import copyIcon from "../../../assets/images/copy.png";
import TabularFormat from "../../shared/components/TabularFormat";
import PaymentDetails from "../../shared/components/PaymentDetails";
import SalesInput from "./SalesInput";
import NetworkSelect from "./NetworkSelect";
import "./Calculator.css";
import {
  gigFormatter,
  amounts,
  plainTextFormat,
} from "../../shared/utilities/formatters";

const serverDetails = {
  number: "0249116309",
  momoName: "Abdul Rahman Benyi",
};

const Calculator = ({ network }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [tableContent, setTableContent] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(network);

  const handleNetworkChange = (network) => {
    setSelectedNetwork(network);
  };

  const prices = useMemo(() => {
    const mtnPrices = {
      1: 5.5,
      2: 10.5,
      3: 15,
      4: 20,
      5: 24,
      6: 28,
      7: 34,
      8: 38.5,
      10: 45,
      15: 66,
      20: 87,
      25: 105,
      30: 127,
      40: 165,
      50: 195,
      60: 210,
      70: 245,
      80: 280,
      100: 350,
    };

    const atPrices = {
      1: 3.5,
      2: 7,
      3: 10.5,
      4: 13,
      5: 16.5,
      6: 19,
      7: 22.5,
      8: 26,
      9: 28,
      10: 33,
      15: 47,
      20: 65,
      25: 80,
      30: 97,
      40: 115,
      50: 130,
      60: 160,
      80: 200,
      100: 245,
    };

    const vodaPrices = {
      5: 24,
      10: 45,
      15: 65,
      20: 82,
      25: 105,
      30: 125,
      40: 170,
      50: 220,
      100: 400,
    };

    switch (selectedNetwork) {
      case "MTN":
        return mtnPrices;
      case "AirtelTigo":
        return atPrices;
      case "Vodafone":
        return vodaPrices;
      default:
        return {};
    }
  }, [selectedNetwork]);

  useEffect(() => {
    const values = inputValue.split("+").map((value) => value.trim());
    const packs = gigFormatter(values);
    const pricesArray = amounts(prices, values);
    setTableContent(<TabularFormat packages={packs} prices={pricesArray} />);
  }, [inputValue, prices]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    const validInputRegex = /^[0-9+\s]*$/;

    if (validInputRegex.test(inputValue)) {
      setInputValue(inputValue);
      setInputError("");
    } else {
      setInputError("Invalid input!");
    }
  };

  const handleInputBlur = () => {
    if (inputError) {
      setInputError("");
    }
  };

  const handleCopyToClipboard = () => {
    if (inputValue) {
      const values = inputValue.split("+").map((value) => value.trim());
      const packs = gigFormatter(values);
      const pricesArray = amounts(prices, values);
      const plainTextLines = plainTextFormat(
        packs,
        pricesArray,
        selectedNetwork
      );
      const plainText = plainTextLines.join("\n");

      navigator.clipboard
        .writeText(plainText)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => console.error("Failed to copy:", err));
    }
  };

  const copyMomoNumber = () => {
    navigator.clipboard
      .writeText(serverDetails.number)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => console.error("Copy failed!", err));
  };

  return (
    <div className="main-container">
      <div className="form">
        <div className="form-container">
          <NetworkSelect
            selectedNetwork={selectedNetwork}
            handleNetworkChange={handleNetworkChange}
          />
          <SalesInput
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            inputError={inputError}
            network={selectedNetwork}
          />
        </div>
        <div className="packs-container">
          {tableContent}
          {!isCopied && (
            <button className="copy" onClick={handleCopyToClipboard}>
              <img src={copyIcon} alt="copy icon" />
              <span>Copy</span>
            </button>
          )}
          {isCopied && <p>copied!</p>}
        </div>
      </div>
      <PaymentDetails
        serverDetails={serverDetails}
        isCopied={isCopied}
        copyMomoNumber={copyMomoNumber}
      />
    </div>
  );
};

export default Calculator;
