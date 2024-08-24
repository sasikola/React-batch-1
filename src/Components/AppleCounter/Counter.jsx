import { useState } from "react";
import Basket from "./Basket";
import ArrowButton from "./ArrowButton";
import toast from "react-hot-toast";

const Counter = () => {
  const [basket1, setBasket1] = useState(10);
  const [basket2, setBasket2] = useState(0);

  const moveAppleRight = () => {
    if (basket1 > 0) {
      setBasket1(basket1 - 1);
      setBasket2(basket2 + 1);
    } else {
      toast.error("No more apples in Basket 1!");
    }
  };

  const moveAppleLeft = () => {
    if (basket2 > 0) {
      setBasket1(basket1 + 1);
      setBasket2(basket2 - 1);
    } else {
      toast.error("No more apples in Basket 2!");
    }
  };

  return (
    <div className="flex items-center space-x-6">
      <Basket title="Basket 1" count={basket1} />
      <div className="flex flex-col items-center space-y-2">
        <ArrowButton direction="left" onClick={moveAppleLeft} />
        <ArrowButton direction="right" onClick={moveAppleRight} />
      </div>
      <Basket title="Basket 2" count={basket2} />
    </div>
  );
};

export default Counter;
