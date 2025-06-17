"use client";
import { FormEvent, useState } from "react";
import SignInButton from "../authUI/SignInButton";
import BodyTemplate from "./BodyTemplate";
import LastfmProfilePreview from "./LastfmProfilePreview";
import LastfmInput from "./LastfmInput";
import { useLastfmProfilePreview } from "@/hooks/useLastfmProfilePreview";
import { useAddLastmUserDB } from "@/hooks/useAddLastmUserDB";

export default function LastfmConnect(props: {
  className?: string;
  setIsModalOpen: (value: boolean) => void;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    await submit(username);
  }

  async function handlePreview(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    await preview(username);
  }

  return (
    <BodyTemplate setState={props.setIsModalOpen} className={props.className}>
      <form
        className="flex flex-col items-center md:mt-[20px]"
        onSubmit={action}
      >
        <h3 className={`text-center md:text-[30px] md:leading-7 md:mx-[60px]`}>
          {header}
        </h3>
        <LastfmInput isConfirmed={isConfirmed} />
        <SignInButton
          text={buttonText}
          className={`md:w-[400px] md:h-[50px] md:mt-[60px]`}
          onClickHandler={
            isConfirmed
              ? () => props.setIsModalOpen(false)
              : () => setIsPreviewOpen(!isPreviewOpen)
          }
        />
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
      {user !== null && (
        <LastfmProfilePreview
          setState={setIsPreviewOpen}
          setIsRightAccount={setIsConfirmed}
          className={isPreviewOpen ? "block z-11" : "hidden"}
          user={user}
        />
      )}
    </BodyTemplate>
  );
}
