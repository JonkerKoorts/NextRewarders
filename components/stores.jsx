import React from "react";
import Link from "next/link";

const Stores = ({ stores }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {stores.map((store) => (
        <div key={store.objectId} className="w-full">
          <Link
            href={store.route}
            className="bg-white p-4 shadow-md flex flex-col justify-between items-stretch rounded-md h-full relative"
          >
            <div className="flex flex-col items-start">
              <p className="mb-2 font-bold text-lg">{store.name}</p>
              <p className="font-thin text-main text-sm mt-[-10px]">
                {store.description}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-4 text-sm">
              <p>
                Current rewards:{" "}
                <span className="text-lg" style={{ color: "#FFC000" }}>
                  0
                </span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Stores;
