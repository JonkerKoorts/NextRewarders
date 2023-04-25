import React, { useState, useEffect } from "react";
import withAuth from "../../hoc/withAuth.js";
import Parse from "../../utils/parse.js";

const HomePage = () => {
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const checkUserName = async () => {
      const user = await Parse.User.currentAsync();
      if (user && !user.get("name")) {
        setShowNamePopup(true);
      }
    };

    checkUserName();
  }, []);

  const updateUserName = async (name) => {
    const user = await Parse.User.currentAsync();
    if (user) {
      user.set("name", name);
      await user.save();
      setShowNamePopup(false);
    }
  };

  return (
    <div className="bg-color-2 min-h-screen flex flex-col items-center justify-center p-6">
      {!showNamePopup && name && (
        <div className="mb-4 text-xl font-bold flex text-center">
          <p>
            Hello
            <span className="text-main"> {name}</span>
            <br />
            Welcome to Rewarders
          </p>
        </div>
      )}
      {showNamePopup && (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <div className="mb-4 text-sm font-medium">
            Please enter your name:
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-main rounded focus:outline-none focus:border-secondary mb-4"
          />
          <button
            onClick={() => updateUserName(name)}
            className="bg-main hover:bg-secondary text-color-2 px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default withAuth(HomePage);
