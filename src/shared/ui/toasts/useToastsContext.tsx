"use client";
import { useContext } from "react";
import { ToastsContext } from "./ToastsContext";

export default function useToastsContext() {
  return useContext(ToastsContext);
}
