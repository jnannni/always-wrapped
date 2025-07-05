"use client";
import { createContext, useEffect, useState, useCallback } from "react";
import type { ToastType, ToastsContextType } from "./toasts";
import Toast from "./Toast";

export const ToastsContext = createContext<ToastsContextType>({
  toasts: [],
  addToast: () => {},
});

export const ToastsProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        3000
      );
      return () => clearTimeout(timer);
    }
  });

  const addToast = useCallback(
    function (toast: ToastType) {
      setToasts((toasts) => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastsContext.Provider value={{ toasts, addToast }}>
      {children}
      <ul className="fixed flex flex-col gap-[10px] bottom-10 right-10">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </ul>
    </ToastsContext.Provider>
  );
};
