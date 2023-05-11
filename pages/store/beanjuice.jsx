/* eslint-disable react-hooks/rules-of-hooks */
import StoreTemplete from "@/components/StoreTemplete";
import React, { useEffect, useState } from "react";
import { fetchBeanJuiceMenu } from "@/utils/parse";

const beanjuice = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const FetchandSetMenuItems = async () => {
      const fetchedMenuItems = await fetchBeanJuiceMenu();
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

export default beanjuice;
