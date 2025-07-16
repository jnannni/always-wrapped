"use client";
import WrappedOverviewList from "./WrappedOverviewList";
import Image from "next/image";
import { TimePeriod as LastfmTimePeriod } from "@/shared/types/lastfm";
import { TimePeriod as SpotifyTimePeriod } from "@/shared/types/spotify";
import { useLastfmWrappedOverview } from "@/shared/lib/hooks/useLastfmData";
import { useSpotifyWrappedOverview } from "@/shared/lib/hooks/useSpotifyData";

type WrappedCardProps = {
  spotifyTimePeriod?: SpotifyTimePeriod;
  lastfmTimePeriod?: LastfmTimePeriod;
};
export default function WrappedCard({
  spotifyTimePeriod,
  lastfmTimePeriod,
}: WrappedCardProps) {
  const spotifyWrappedOverview = useSpotifyWrappedOverview(
    spotifyTimePeriod || "short_term"
  );

  const lastfmWrappedOverview = useLastfmWrappedOverview(
    lastfmTimePeriod || "7day"
  );

  const tracks = spotifyWrappedOverview.tracks || lastfmWrappedOverview.tracks;
  const artists =
    spotifyWrappedOverview.artists || lastfmWrappedOverview.artists;
  const color = "bg-crimson";

  return (
    <div
      className={`${color} w-[317px] h-[155px] border-1 border-black relative overflow-hidden shrink-0 rounded-[10px] mb-[8px]`}
    >
      <h2
        className={`text-[92px] absolute leading-none -mt-5 -left-5 opacity-30`}
      >
        2024
      </h2>
      <div className=" flex pt-[14px] gap-[15px] justify-center">
        <WrappedOverviewList listName="Top tracks" itemNames={tracks} />
        <WrappedOverviewList listName="Top artists" itemNames={artists} />
      </div>
      <button className="absolute right-4 bottom-4 bg-white px-[10px] py-[5px] rounded-[10px] flex items-center gap-[3px] border-1 border-black">
        <Image
          src="/open-details-icon.svg"
          width={512}
          height={512}
          alt="Open details icon"
          className="w-[15px] h-[15px]"
        />
        <span className="">Details</span>
      </button>
    </div>
  );
}
