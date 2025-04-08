import "./loading.css";
import React from "react";


export function Loading() {
  return (
    <div className="loader-container"  style={{ height: '500px' }}>
      <div className="loader"></div>
      <p>Loading please wait ... </p>
    </div>
  );
}