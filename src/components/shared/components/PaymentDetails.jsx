import React from "react";
import copyIcon from "../../../assets/images/copy.png";
import "./PaymentDetails.css";

const PaymentDetails = ({ serverDetails, isCopied, copyMomoNumber }) => {
  const phoneNumberHashing = (phone) => {
    return `+233*******${phone.slice(-2)}`;
  };

  return (
    <div className="payment">
      <p className="payment-details">
        Make payment to
        <br />
        Momo name: {serverDetails.momoName}
        <br />
        Momo number: {phoneNumberHashing(serverDetails.number)}
      </p>
      {!isCopied && (
        <button className="copy" onClick={copyMomoNumber}>
          <img src={copyIcon} alt="copy icon" />
          <span>Copy</span>
        </button>
      )}
      {isCopied && <p>Momo Number Copied!</p>}
    </div>
  );
};

export default PaymentDetails;
