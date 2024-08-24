import React, { useContext } from "react";
import { counterContext } from "../../../App";

function ComponentA() {
  const count = useContext(counterContext);
  return (
    <>
      <div>ComponentA {count} </div>
    </>
  );
}

export default ComponentA;
