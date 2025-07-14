import { ToastType } from "./toasts";

export default function Toast(props: { toast: ToastType }) {
  const { message, type } = props.toast;
  const textColor = type === "success" ? "text-limegreen" : "text-crimson";
  const borderColor =
    type === "success" ? "border-limegreen" : "border-crimson";
  return (
    <li
      className={`bg-white ${textColor} ${borderColor} border-1 rounded-[10px] md:px-[25px] md:py-[10px]`}
    >
      <p>{message}</p>
    </li>
  );
}
