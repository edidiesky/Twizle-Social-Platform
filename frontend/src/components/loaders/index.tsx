import React, { useState } from "react";

const LoaderIndex: React.FC<{ type?: string }> = ({ type }) => {

  if (type === "small") {
    return (
      <div
        className="flex item-center justify-center"
        style={{ width: "100vw", zIndex: "200", position: "fixed", height: "100vh", background: "var(--backdrop)" }}
      >
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div
      className="flex item-center justify-center column gap-1"
      style={{ width: "100vw", zIndex: "200", position: "fixed", height: "100vh", background: "var(--backdrop)" }}
    >
      <div className="loading"></div>
      <div className="text-center w-100 text-bold fs-18">Loading ...</div>
    </div>
  );
}

export default LoaderIndex
