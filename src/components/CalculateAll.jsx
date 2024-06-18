import React, { useMemo } from "react";
import AllCalculator from "./AllCalculator";

const CalculateAll = () => {
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
