import React from "react";
import CustomToggle from "../Helpers/CustomToggle";

export default function Toggle() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <CustomToggle />

        {/* for disabled */}
        {/* <CustomToggle disabled={true} checked={false}/> */}
      </div>
    </>
  );
}
