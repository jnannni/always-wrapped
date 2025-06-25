"use client";
import { FormEvent, useEffect, useState } from "react";
import LastfmProfilePreview from "./ui/LastfmProfilePreview";
import LastfmInput from "./ui/LastfmInput";
import { useLastfmProfilePreview } from "@/features/lastfm-connect/hooks/useLastfmProfilePreview";
import { useAddLastmUserDB } from "@/features/lastfm-connect/hooks/useAddLastmUserDB";
import useModalsContext from "@/shared/ui/modals/useModalsContext";

export default function LastfmConnect(props: {
  className?: string;
  accessToken: string;
  closeModal: () => void;
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [hasOpenedPreview, setHasOpenedPreview] = useState(false);
  const { addModal, closeModal } = useModalsContext();
  const action = isConfirmed ? handleSubmit : handlePreview;
  const header = isConfirmed ? (
    <span>
      Almost there! Make sure you chose the right account and confirm!
    </span>
  ) : (
    <span>Connect to lastfm😁 Enter your lastfm username.</span>
  );
  const buttonText = isConfirmed ? "Connect to my lastfm" : "Preview my lastfm";
  const { user, preview } = useLastfmProfilePreview();
  const { submit } = useAddLastmUserDB();

  useEffect(() => {
    if (user && !hasOpenedPreview) {
      addModal(
        "lastfm-preview",
        <LastfmProfilePreview
          user={user}
          setIsRightAccount={setIsConfirmed}
          closeModal={() => {
            closeModal("lastfm-preview");
            setHasOpenedPreview(false);
          }}
        />
      );
      setHasOpenedPreview(true);
    }
  }, [user, hasOpenedPreview, addModal, closeModal]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    await submit(username, props.accessToken);
  }

  async function handlePreview(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    await preview(username);
  }

  return (
    <>
      <form
        className="flex flex-col items-center md:mt-[20px]"
        onSubmit={action}
      >
        <h3 className={`text-center md:text-[30px] md:leading-7 md:mx-[60px]`}>
          {header}
        </h3>
        <LastfmInput isConfirmed={isConfirmed} />
        <button
          type="submit"
          className="px-[15px] py-[5px] rounded-[10px] bg-limegreen text-primary-black font-semibold w-full cursor-pointer md:w-[400px] md:h-[50px] md:mt-[60px]"
        >
          {buttonText}
        </button>
      </form>
      {!isConfirmed && (
        <a
          href="https://www.last.fm/user/my_username"
          target="_blank"
          className="underline md:mt-[10px] md:text-[15px] hover:font-bold"
        >
          Check your username on lastfm👉
        </a>
      )}
    </>
  );
}
