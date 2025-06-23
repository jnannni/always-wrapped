import { createContext, useState } from "react";
import { ModalsContextType } from "./modals";
import type { JSX } from "react";

export const ModalsContext = createContext<ModalsContextType>({
  modals: {},
  addModal: () => {},
  closeModal: () => {},
  openModal: () => {},
});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalName, setModalName] = useState("");
  const [modals, setModals] = useState<Record<string, JSX.Element>>({});

  const addModal = (modalName: string, Component: JSX.Element) => {
    if (!modals[modalName]) {
      setModals({ ...modals, [modalName]: Component });
    }
  };

  const openModal = (modalName: string) => {
    setModalName(modalName);
  };

  const closeModal = () => {
    setModalName("");
  };

  return (
    <ModalsContext.Provider value={{ modals, addModal, openModal, closeModal }}>
      {modalName && modals[modalName]}
      {children}
    </ModalsContext.Provider>
  );
};
