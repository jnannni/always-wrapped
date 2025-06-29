"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import ItemDetails from "./ItemDetails";
import { SpotifyTrack } from "@/shared/types/spotify";

type MusicItemCardProps = {
  track: SpotifyTrack;
  onHandleDetailsClick: (item: string, buttonRef: HTMLButtonElement) => void;
};
export default function MusicItemCard({
  track,
  onHandleDetailsClick,
}: MusicItemCardProps) {
  const detailsRef = useRef<HTMLButtonElement>(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleDetailsClick = () => {
    if (detailsRef.current) {
      onHandleDetailsClick("item", detailsRef.current);
      setIsDetailsVisible(!isDetailsVisible);
    }
  };

  return (
    <div className="flex items-center px-[20px] py-[0.5rem] border border-black rounded-[10px] md:w-[450px] md:py-[1rem] xl:w-[600px]">
      <span className="inline-block text-[18px] w-[20px] mr-[20px] xl:text-[24px]">
        1
      </span>
      <div className="w-[40px] h-[40px] bg-black mr-[15px] xl:w-[55px] xl:h-[55px]"></div>
      <p className="flex flex-col w-[145px] mr-[10px] xl:w-[200px]">
        <span className="inline-block text-[12px] xl:text-[18px]">
          {track.name}
        </span>
        <span className="inline-block text-[8px] xl:text-[14px]">
          {track.artists.length > 1
            ? track.artists.map((artist) => artist.name).join(", ")
            : track.artists[0].name}
        </span>
      </p>
      <p className="hidden md:block">
        <span className="inline-block text-[12px] mr-[40px] xl:text-[18px]">
          {track.album.name}
        </span>
      </p>
      <span className="inline-block text-[12px] xl:text-[14px]">33</span>
      <div className="ml-auto relative">
        <button
          ref={detailsRef}
          onClick={handleDetailsClick}
          className="cursor-pointer"
        >
          <Image
            src="/more-icon.svg"
            width={512}
            height={512}
            alt="More icon"
            className="w-[16px] ml-auto relative"
          />
        </button>
        <ItemDetails visible={isDetailsVisible} />
      </div>
    </div>
  );
}
