import React from "react";

const Day = ({ setDays, item }) => {
  return (
    <button
      className="day"
      onClick={() => setDays(item.value)}
      value={item.value}
    >
      {item.text}
    </button>
  );
};

export default Day;
