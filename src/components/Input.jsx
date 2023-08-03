import React from "react";

export default function Input({ inputVal, setInputVal }) {
  const handleChange = (event) => {
    let newVal = event.target.value;
    setInputVal(newVal);
  };
  return (
    <div className="Input">
      <input
        type="text"
        value={inputVal}
        onChange={handleChange}
        placeholder="Enter New Task"
      />
    </div>
  );
}
