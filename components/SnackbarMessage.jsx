// components/Snackbar.js
import React from "react";

const Snackbar = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8 bg-main text-white px-4 py-2 rounded shadow-md">
      {message}
      <button className="ml-4 text-white" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default Snackbar;
