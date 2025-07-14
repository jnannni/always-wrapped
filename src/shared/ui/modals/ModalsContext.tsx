import { createContext, useState } from "react";
import { ModalsContextType, ModalType } from "./modals";
import LFFormBodyTemplate from "../LFFormBodyTemplate";
import type { JSX } from "react";

export const ModalsContext = createContext<ModalsContextType>({
  modals: [],
  addModal: () => {},
  closeModal: () => {},
});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<ModalType[]>([]);

  const addModal = (modalName: string, Component: JSX.Element) => {
    setModals((prev) => {
      if (prev.find((m) => m.name === modalName)) return prev;
      return [...prev, { name: modalName, component: Component }];
    });
  };

  const closeModal = (modalName: string) => {
    setModals((prev) => prev.filter((m) => m.name !== modalName));
  };

  return (
    <ModalsContext.Provider value={{ modals, addModal, closeModal }}>
      {children}
      {modals.map(({ name, component }) => (
        <LFFormBodyTemplate
          key={name}
          modalName={modals[modals.length - 1].name}
        >
          {component}
        </LFFormBodyTemplate>
      ))}
    </ModalsContext.Provider>
  );
};
