export type ToastType = {
    id: string;
    message: string;
    type: "success" | "error";
    action?: () => void;
}

export type ToastsContextType = {
    toasts: ToastType[];
    addToast: (toast: ToastType) => void;
}