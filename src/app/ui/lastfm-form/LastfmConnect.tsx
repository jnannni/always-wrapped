"use client";
import { FormEvent, useState } from "react";
import SignInButton from "../authUI/SignInButton";
import { getSession } from "next-auth/react";
import BodyTemplate from "./BodyTemplate";
import LastfmProfilePreview from "./LastfmProfilePreview";
import type { LastfmUser } from "@/app/types/lastfm";

export default function LastfmConnect(props: {
  className?: string;
  setState: (value: boolean) => void;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [user, setUser] = useState<LastfmUser | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const session = await getSession();
    const accessToken = session?.supabaseAccessToken;
    const res = await fetch("/api/lastfm-db", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        username: username,
      }),
    });

    const result = await res.json();
    if (result.error) {
      console.log(result.error);
    } else console.log("Inserted " + result.data);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const data = await fetch("/api/lastfm/profile-preview", {
      method: "POST",
      body: JSON.stringify({ username: username }),
    });
    const result = await data.json();
    setUser(result);
  }

  return (
    <BodyTemplate setState={props.setState} className={props.className}>
      <form
        className="flex flex-col items-center md:mt-[30px]"
        onSubmit={submit}
      >
        <h3 className="text-center md:text-[30px] md:leading-7 md:mx-[60px]">
          Connect to lastfm😁 Enter your lastfm username.
        </h3>
        <div>
          <input
            type="text"
            name="username"
            is="u👉sername"
            required
            placeholder="Username"
            className="bg-placeholder rounded-[10px] md:h-[50px] md:w-[400px] md:px-[25px] md:mt-[40px]"
          />
        </div>
        <SignInButton
          text="Connect to my lastfm"
          className="md:w-[400px] md:h-[50px] md:mt-[60px]"
          onClickHandler={() => setIsPreviewOpen(!isPreviewOpen)}
        />
      </form>
      <a
        href="https://www.last.fm/user/my_username"
        target="_blank"
        className="underline md:mt-[10px] md:text-[15px] hover:font-bold"
      >
        Check your username on lastfm👉
      </a>
      {user !== null && (
        <LastfmProfilePreview
          setState={setIsPreviewOpen}
          className={isPreviewOpen ? "block z-11" : "hidden"}
          user={user}
        />
      )}
    </BodyTemplate>
  );
}
