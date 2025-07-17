"use client";
import WrappedOverviewList from "./WrappedOverviewList";
import Image from "next/image";
import { TimePeriod as LastfmTimePeriod } from "@/shared/types/lastfm";
import { TimePeriod as SpotifyTimePeriod } from "@/shared/types/spotify";
import { useLastfmWrappedOverview } from "@/shared/lib/hooks/useLastfmData";
import { useSpotifyWrappedOverview } from "@/shared/lib/hooks/useSpotifyData";
import { useState } from "react";
import WrappedDetailsModal from "./WrappedDetailsModal";

type WrappedCardProps = {
  spotifyTimePeriod?: SpotifyTimePeriod;
  lastfmTimePeriod?: LastfmTimePeriod;
};
export default function WrappedCard({
  spotifyTimePeriod,
  lastfmTimePeriod,
}: WrappedCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

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
      <div className=" flex pt-[14px] px-[10px] gap-[5px]">
        <WrappedOverviewList
          listName="Top tracks"
          itemNames={tracks}
          className="max-w-[70%]"
        />
        <WrappedOverviewList
          listName="Top artists"
          itemNames={artists.slice(0, 3)}
        />
      </div>
      <button
        className="absolute cursor-pointer right-4 bottom-4 bg-white px-[10px] py-[5px] rounded-[10px] flex items-center gap-[3px] border-1 border-black"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src="/open-details-icon.svg"
          width={512}
          height={512}
          alt="Open details icon"
          className="w-[15px] h-[15px]"
        />
        <span className="">Details</span>
      </button>
      {isModalOpen && (
        <WrappedDetailsModal
          currentModalIndex={currentModalIndex}
          setCurrentModalIndex={setCurrentModalIndex}
          onClose={() => setIsModalOpen(false)}
          items={
            spotifyTimePeriod ? spotifyWrappedOverview : lastfmWrappedOverview
          }
        />
      )}
    </div>
  );
}
