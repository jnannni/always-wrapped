import type {JSX} from "react";
export type ModalsContextType = {
    modals: Record<string, JSX.Element>
    addModal: (modalName: string, Component: JSX.Element) => void
    openModal: (modalName: string) => void
    closeModal: () => void
}