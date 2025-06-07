"use client";
import { FormEvent } from "react";
import SignInButton from "../authUI/SignInButton";
import { getSession } from "next-auth/react";
import { MdClose, MdInfoOutline } from "react-icons/md";
export default function LastfmConnect(props: {
  className?: string;
  setState: (value: boolean) => void;
}) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const session = await getSession();
    const accessToken = session?.supabaseAccessToken;
    const res = await fetch("/api/lastfm-profile", {
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

  return (
    <div
      className={`${props.className} z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-primary-text bg-white border-1 rounded-[10px] border-black md:w-[500px] md:h-[390px]`}
    >
      <div className="flex justify-between md:mt-[25px] md:w-[430px]">
        <button data-tooltip-target="info-tooltip" className="cursor-pointer">
          <MdInfoOutline className="w-[25px] h-[25px]" />
        </button>
        <div className="absolute z-15 invisible inline-block bg-foreground text-white transition-opacity duration-300 rounded-[10px] opacity-0 md:text-[15px]"></div>
        <div id="info-tooltip" role="tooltip" className="absolute hidden"></div>
        <button
          className="cursor-pointer"
          onClick={() => props.setState(false)}
        >
          <MdClose className="w-[25px] h-[25px]" />
        </button>
      </div>
      <form
        className="flex flex-col items-center md:mt-[30px]"
        onSubmit={handleSubmit}
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
        />
      </form>
      <a
        href="https://www.last.fm/user/my_username"
        target="_blank"
        className="underline md:mt-[10px] md:text-[15px] hover:font-bold"
      >
        Check your username on lastfm👉
      </a>
    </div>
  );
}
