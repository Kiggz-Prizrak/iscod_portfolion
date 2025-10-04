import React from "react";

const Tag = ({ label, active, onClick }) => {
  return (
    <button
      className={`btn ${active ? "btn--primary" : "btn--ghost"}`}
      style={{ padding: ".5rem .9rem", borderRadius: "999px" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tag;
