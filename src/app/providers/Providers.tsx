"use client";
import { ModalsProvider } from "../../shared/ui/modals/ModalsContext";
import { ToastsProvider } from "../../shared/ui/toasts/ToastsContext";
import { UIStoreProvider } from "@/shared/state/UIStoreContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIStoreProvider>
      <ToastsProvider>
        <ModalsProvider>{children}</ModalsProvider>
      </ToastsProvider>
    </UIStoreProvider>
  );
}
