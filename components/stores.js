import React from "react";
import Link from "next/link";

const Stores = ({ stores }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {stores.map((store) => (
        <div key={store.objectId} className="w-full">
          <Link
            href={store.route}
            className="bg-white p-4 shadow-md flex justify-center text-center flex-col rounded-md"
          >
            <p className="mb-2 font-bold">{store.name}</p>
            <p className="font-thin" style={{ fontSize: "10px" }}>
              {store.description}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Stores;
