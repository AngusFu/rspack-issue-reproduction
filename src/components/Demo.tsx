import React from "react";
import { useDemo } from "./hooks";

export { DemoContext } from "./ctx";

export default function Demo() {
  const ctxValue = useDemo();

  return <div>{ctxValue.message}</div>;
}
