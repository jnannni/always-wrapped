import type {JSX} from "react";

export type ModalType = {
    name: string;
    component: JSX.Element;
}
export type ModalsContextType = {
    modals: ModalType[]
    addModal: (modalName: string, Component: JSX.Element) => void
    closeModal: (modalName: string) => void
}