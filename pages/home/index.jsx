import React, { useState, useEffect } from "react";
import withAuth from "../../hoc/withAuth.js";
import Parse from "../../utils/parse.js";
import { fetchStores } from "../../utils/parse.js";
import { motion } from "framer-motion";
import Stores from "@/components/stores.jsx";

const HomePage = () => {
  const [showNamePopup, setShowNamePopup] = useState(false);
  const [name, setName] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserName = async () => {
      const user = await Parse.User.currentAsync();
      if (user) {
        if (user.get("name")) {
          setName(user.get("name"));
          setIsNewUser(false);
        } else {
          setShowNamePopup(true);
          setIsNewUser(true);
        }
      }
    };

    const fetchAndSetStores = async () => {
      const fetchedStores = await fetchStores();
      setStores(fetchedStores);
      setIsLoading(false);
    };

    checkUserName();
    fetchAndSetStores();
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
    <div className="bg-color-2 min-h-screen flex flex-col items-center justify-start py-32 px-6">
      {isLoading && (
        <div className="w-16 h-16 border-t-2 border-b-2 border-main rounded-full animate-spin"></div>
      )}
      {!isLoading && !showNamePopup && name && (
        <>
          <div className="mb-4 text-xl font-bold flex text-center">
            <p>
              Hello
              <span className="text-main"> {name}</span>
              <br />
              {isNewUser ? "Welcome to Rewarders" : "Welcome back"}
            </p>
          </div>
          <div className="mb-4 text-lg font-semibold">
            {isNewUser ? "Browse Stores:" : "Stores:"}
          </div>
          <Stores stores={stores} />
        </>
      )}
      {showNamePopup && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{
            type: "just",
            stiffness: 100,
            damping: 10,
            mass: 2,
            restDelta: 0.5,
          }}
          className="bg-white p-6 rounded shadow-md w-full max-w-md mt-[55%]"
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default withAuth(HomePage);
