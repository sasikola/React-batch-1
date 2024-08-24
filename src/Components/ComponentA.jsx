import React from "react";
import { useSelector } from "react-redux";

function ComponentA() {
  const counter = useSelector((i) => i.counter.count);
  console.log("Component A page", counter);
  return <div>ComponentA</div>;
}

export default ComponentA;
