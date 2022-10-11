import React from "react";

export const Display = ({ strToDisplay, isPrank }) => {
  const clsName = isPrank ? "display prank" : "display";
  return <div className={clsName}>{strToDisplay || "0.00"}</div>;
};
