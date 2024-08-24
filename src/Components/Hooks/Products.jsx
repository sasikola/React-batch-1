import React, { useMemo, useState } from "react";

function SortedList({ items }) {
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    return [...items].sort();
  }, [items]);

  return (
    <>
      <div>
        <h1>Sorted list page </h1>
        <ul>
          {sortedItems.map((item, index) => {
            <>
              <li key={index}>{console.log(items)}  </li>
            </>;
          })}
        </ul>
      </div>
    </>
  );
}

function Products() {
  const [items, setItems] = useState(["Banana", "Apple", "Cherry"]);
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Products Page.. </h1>
      <SortedList items={items} />
      <button onClick={()=> setItems([...items, "Mango"])}>click</button> <br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Products;
