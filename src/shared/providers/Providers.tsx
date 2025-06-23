"use client";
import { ModalsProvider } from "../ui/modals/ModalsContext";
import { ToastsProvider } from "../ui/toasts/ToastsContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastsProvider>
      <ModalsProvider>{children}</ModalsProvider>
    </ToastsProvider>
  );
}
