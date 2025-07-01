"use client";
import Image from "next/image";
import MusicItemCard from "@/features/music-item/MusicItemCard";
import React from "react";
import { SpotifyTrack } from "@/shared/types/spotify";
import { LastfmTrack } from "@/shared/types/lastfm";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

type SpotifyTracks = {
  tracks: {
    short_term: SpotifyTrack[];
    medium_term: SpotifyTrack[];
    long_term: SpotifyTrack[];
  };
};

type LastfmTracks = {
  tracks: {
    overall: LastfmTrack[];
    "7day": LastfmTrack[];
    "1month": LastfmTrack[];
    "3month": LastfmTrack[];
    "6month": LastfmTrack[];
    "12month": LastfmTrack[];
  };
};
type TracksChartProps = SpotifyTracks | LastfmTracks;

export default function TracksChart({ tracks }: TracksChartProps) {
  const handleDetailsItemClick = () => {};
  return (
    <div className="relative">
      <div className="flex w-fill ml-[21px]">
        <span className="inline-block w-[20px] xl:text-[22px]">#</span>
        <span className="inline-block ml-[25px] xl:text-[22px]">Title</span>
        <Image
          src="/counter.svg"
          alt="Counter icon"
          width={512}
          height={512}
          className="w-[15px] ml-[175px] md:ml-[285px] xl:ml-[380px] xl:w-[20px]"
        />
      </div>
      <div className="flex flex-col gap-[15px] max-h-[295px] md:max-h-[365px] overflow-hidden">
        {tracks.long_term.map((track) => (
          <MusicItemCard
            key={track.id}
            track={track}
            onHandleDetailsClick={handleDetailsItemClick}
          />
        ))}
      </div>
      <div className="absolute -bottom-5 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <button>More...</button>
      </div>
    </div>
  );
}
