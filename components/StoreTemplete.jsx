import Link from "next/link";
import React, { useState, useEffect } from "react";

const StoreTemplate = ({ menuItems }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (menuItems.length > 0) {
      setIsLoading(false);
    }
  }, [menuItems]);

  return (
    <div className="bg-color-2 min-h-screen flex flex-col items-center justify-start py-32 px-6">
      {isLoading && (
        <div className="w-16 h-16 border-t-2 border-b-2 border-main rounded-full animate-spin"></div>
      )}
      {!isLoading && (
        <>
          <div className="mb-4 text-xl font-bold text-center">
            <p>StoreTemplate</p>
          </div>
          <div>
            {menuItems.map((item) => (
              <div
                key={item.objectId}
                className="bg-white p-6 rounded shadow-md w-full max-w-md mb-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold mb-1">
                      {item.ItemName}
                    </p>
                    <p className="text-sm font-medium">{item.Description}</p>
                  </div>
                  <div className="text-main text-lg font-semibold">
                    {item.RewardProgress}
                    {"/"}
                    {item.RewardTotal}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/home"
            className="bg-main hover:bg-secondary text-color-2 px-4 py-2 rounded"
          >
            Back
          </Link>
        </>
      )}
    </div>
  );
};

export default StoreTemplate;
