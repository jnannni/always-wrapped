"use client";
import UserStatsCard from "./UserStatsCard";
import ConnectLastfmCard from "../../../features/lastfm-connect/ConnectLastfmCard";
import Image from "next/image";
import { ToastButton } from "./ToastButton";
import useSpotifyStoreContext from "@/shared/contexts/spotify/useSpotifyStoreContext";
export default function MainProfileSection() {
  const { spotifyStore } = useSpotifyStoreContext();
  const { userProfile } = spotifyStore;
  const imgInfo = userProfile.images[0];
  const username = userProfile.display_name;

  const profileImg = (
    <Image
      src={imgInfo.url || ""}
      alt="Profile image"
      height={Number(imgInfo.height)}
      width={Number(imgInfo.width)}
      className="object-cover"
    />
  );
  return (
    <section className="flex flex-col gap-[25px]">
      <div className="flex flex-col md:flex-row md:items-center gap-[30px] md:gap-[50px]">
        <div className="flex gap-[25px] md:flex-col md:gap-[10px]">
          <div className="w-[140px] h-[140px] rounded-full bg-black overflow-hidden md:order-2">
            {profileImg}
          </div>
          <h3 className="text-[20px] font-semibold md:order-1">{username}</h3>
        </div>
        <ToastButton />
      </div>
      <div className="scroll-smooth overflow-x-auto overflow-hidden mb-[38px]">
        <div className="flex flex-col gap-[15px] w-fit">
          <div className="flex flex-nowrap gap-[24px]">
            <UserStatsCard name="Minutes listened" />
            <UserStatsCard name="Tracks added" />
          </div>
          <div className="flex flex-nowrap gap-[24px]">
            <UserStatsCard name="Minutes listened" />
            <ConnectLastfmCard accessToken={""} />
          </div>
        </div>
      </div>
    </section>
  );
}
