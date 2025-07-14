"use client";
import { useContext } from "react";
import { ModalsContext } from "./ModalsContext";

export default function useModalsContext() {
  return useContext(ModalsContext);
}
