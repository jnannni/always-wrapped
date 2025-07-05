"use client";
import Button from "@/shared/ui/Button";
import useToastsContext from "@/shared/ui/toasts/useToastsContext";
export function ToastButton() {
  const { addToast } = useToastsContext();

  function handleClick() {
    addToast({
      id: "1",
      message: "This is a toast!",
      type: "success",
    });
  }
  return (
    <Button
      text="Make toast appear!"
      className="px-[15px] py-[15px]"
      onClickHandler={handleClick}
    />
  );
}
