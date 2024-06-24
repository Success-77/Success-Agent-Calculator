import React, { useMemo } from "react";
import AllCalculator from "./AllCalculator";

const CalculateAll = () => {
  const mtnPrices = useMemo(
    () => ({
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
    }),
    []
  );

  const atPrices = useMemo(
    () => ({
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
    }),
    []
  );

  const vodaPrices = useMemo(
    () => ({
      5: 24,
      10: 45,
      15: 65,
      20: 82,
      25: 105,
      30: 125,
      40: 170,
      50: 220,
      100: 400,
    }),
    []
  );

  return (
    <div>
      <AllCalculator
        mtnPrices={mtnPrices}
        atPrices={atPrices}
        vodaPrices={vodaPrices}
      />
    </div>
  );
};

export default CalculateAll;
