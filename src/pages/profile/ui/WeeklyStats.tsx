"use client";
import MusicItemCard from "@/features/music-item/MusicItemCard";
import Image from "next/image";
export default function WeeklyStats() {
  const handleDetailsItemClick = () => {};
  return (
    <section className="flex flex-col gap-[5px]">
      <h3 className="font-semibold text-[50px] leading-8 mb-[5px] md:mb-[25px] xl:text-[60px] xl:leading-9">
        <span className="inline-block leading-8 xl:leading-9">
          Your top <br className="md:hidden" />
          <span className={`inline-block relative text-[60px] xl:text-[70px]`}>
            weekly
            <Image
              src="/text-underline-up.svg"
              width={317}
              height={48}
              alt="Underline for a word"
              className="absolute left-3 top-7 -z-1"
            />
          </span>
        </span>
        <br />
        tracks
      </h3>
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
          <MusicItemCard onHandleDetailsClick={handleDetailsItemClick} />
          <MusicItemCard onHandleDetailsClick={handleDetailsItemClick} />
          <MusicItemCard onHandleDetailsClick={handleDetailsItemClick} />
          <MusicItemCard onHandleDetailsClick={handleDetailsItemClick} />
          <MusicItemCard onHandleDetailsClick={handleDetailsItemClick} />
        </div>
        <div className="absolute -bottom-5 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <button>More...</button>
        </div>
      </div>
    </section>
  );
}
