"use client";

import Button from "@/shared/ui/Button";
import LastfmConnect from "./LastfmConnect";
import useModalsContext from "@/shared/ui/modals/useModalsContext";
export default function ConnectLastfmCard(props: { accessToken: string | "" }) {
  const { addModal, closeModal } = useModalsContext();

  function handleOnClick() {
    addModal(
      "lastfm-connect",
      <LastfmConnect
        accessToken={props.accessToken}
        closeModal={() => closeModal("lastfm-connect")}
      />
    );
  }

  return (
    <div className="bg-black flex-col text-white w-[198px] h-[135px] content-between rounded-lg shrink-0 relative">
      <h5 className="text-[28px] leading-[22px] px-[15px] pt-[10px] mb-[5px] capitalize">
        lastfm
      </h5>
      <div className="flex flex-col px-[15px] mt-[15px]">
        <Button
          text="Connect to lastfm"
          className="px-[15px] w-full bg-white text-black py-[10px] h-fit rounded-[10px]"
          onClickHandler={handleOnClick}
        />
        <Button text="Why?" />
      </div>
    </div>
  );
}
