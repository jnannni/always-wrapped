import { cherryBombOne } from "../layout";
import MusicItemCard from "./MusicItemCard";
import Image from "next/image";
export default function WeeklyStats() {
  return (
    <section className="flex flex-col gap-[5px]">
      <h3 className="font-semibold text-[50px] leading-9 mb-[5px]">
        <span className="inline-block leading-9">
          Your top <br />
          <span className={`${cherryBombOne.className} text-[60px]`}>
            weekly
          </span>
        </span>
        <br />
        tracks
      </h3>
      <div className="relative">
        <div className="flex w-fill ml-[21px]">
          <span className="inline-block w-[20px]">#</span>
          <span className="inline-block ml-[75px]">Title</span>
          <Image
            src="/counter.svg"
            alt="Counter icon"
            width={512}
            height={512}
            className="w-[15px] ml-[123px]"
          />
        </div>
        <div className="flex flex-col gap-[15px] max-h-[295px] overflow-hidden">
          <MusicItemCard />
          <MusicItemCard />
          <MusicItemCard />
          <MusicItemCard />
          <MusicItemCard />
        </div>
        <div className="absolute -bottom-5 -translate-x-1/2 -translate-y-1/2 left-1/2">
          <button>More...</button>
        </div>
      </div>
    </section>
  );
}
