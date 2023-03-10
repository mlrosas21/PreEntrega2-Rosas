import React from "react";
import { Item } from "../Item";

export const ItemList = ({ items }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
      {items.map((e) => <Item item={e}/>)}
    </div>
  );
};
