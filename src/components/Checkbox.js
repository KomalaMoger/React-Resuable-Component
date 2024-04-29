import React from "react";
export default function Checkbox() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="checkbox"
          name="checkbox"
          id="custom-checkbox"
          style={{ cursor: "pointer" }}
        />
        <label htmlFor="custom-checkbox" style={{ cursor: "pointer" }}>
          custom checbox
        </label>
      </div>
    </>
  );
}
