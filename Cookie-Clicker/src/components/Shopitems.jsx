import { useState, useEffect } from "react";

const ItemShop = [
  { id: 1, title: "Cookie" },
  { id: 2, title: "Grandma" },
  { id: 3, title: "Cake" },
];

export default function Shopitems() {
  return (
    <div>
      <h1>Store Items</h1>
      <ul>
        {ItemShop.map((item) => {
          return (
            <div key={item.id}>
              <li key={item.id}>{item.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
