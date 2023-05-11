/* eslint-disable react-hooks/rules-of-hooks */
import StoreTemplete from "@/components/StoreTemplete";
import React, { useEffect, useState } from "react";
import { fetchStoffelbergMenu } from "@/utils/parse";

const stoffelberg = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const FetchandSetMenuItems = async () => {
      const fetchedMenuItems = await fetchStoffelbergMenu();
      setMenuItems(fetchedMenuItems);
    };

    FetchandSetMenuItems();
  }, []);
  return (
    <>
      <StoreTemplete menuItems={menuItems} />
    </>
  );
};

export default stoffelberg;
