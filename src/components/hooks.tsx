import { useContext } from "react";
import { DemoContext } from "./Demo";

export function useDemo() {
  return useContext(DemoContext);
}
