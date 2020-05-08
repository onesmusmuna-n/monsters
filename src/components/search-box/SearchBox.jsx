import React from "react";

import "./SearchBox.css";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input className="search" type="text" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}
