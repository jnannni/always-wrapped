"use client";
import Image from "next/image";
import MusicItemCard from "@/features/music-item/MusicItemCard";
import React, { useEffect, useState } from "react";
import { SpotifyTrack } from "@/shared/types/spotify";
import { LastfmTrack } from "@/shared/types/lastfm";
import { fetchLastfmTrackAlbum } from "@/shared/api/fetchLastfmData";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

type TracksChartProps = {
  tracks: SpotifyTrack[] | LastfmTrack[];
};

export default function TracksChart({ tracks }: TracksChartProps) {
  const { toggle } = useUIStoreContext();
  const [pendingAlbums, setPendingAlbums] = useState(false);
  const [lastfmAlbumsNames, setLastfmAlbumsNames] = useState<string[]>([]);

  const encodeLastfm = (str: string) => {
    const regex = /[^A-Za-z0-9]/;
    if (!regex.test(str)) {
      return str;
    }
    const firstEncoded = encodeURIComponent(str);
    const secondEncoded = encodeURIComponent(firstEncoded);
    return secondEncoded;
  };

  useEffect(() => {
    async function fetchAlbums() {
      try {
        setPendingAlbums(true);

        const trackNames: string[] = [];
        const artistNames: string[] = [];

        tracks.forEach((track) => {
          const trackName = encodeLastfm(track.name);
          const artistName = encodeLastfm(track.artists[0].name);
          trackNames.push(trackName);
          artistNames.push(artistName);
        });

        const response = await fetchLastfmTrackAlbum(trackNames, artistNames);
        setLastfmAlbumsNames(response || []);
      } catch (error) {
        console.error(error);
      } finally {
        setPendingAlbums(false);
      }
    }
    if (toggle === "lastfm") {
      fetchAlbums();
    }
  }, [tracks]);

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
        {tracks.map((track, index) => (
          <MusicItemCard
            key={
              "id" in track
                ? track.id
                : track.mbid || `${track.name}-${track.artists[0].name}`
            }
            track={track}
            album={toggle === "lastfm" ? lastfmAlbumsNames[index] : null}
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
