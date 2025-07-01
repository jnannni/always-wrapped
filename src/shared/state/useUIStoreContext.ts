"use client";
import { useContext } from "react";
import { UIStoreContext } from "./UIStoreContext";

export default function useUIStoreContext() {
  const context = useContext(UIStoreContext);
  if (!context) {
    throw new Error("useUIStoreContext must be used within a UIStoreProvider");
  }
  return context;
}
