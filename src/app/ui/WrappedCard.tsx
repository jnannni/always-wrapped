import { cherryBombOne } from "../layout";
import WrappedOverviewList from "./WrappedOverviewList";
import Image from "next/image";
export default function WrappedCard() {
  return (
    <div className="w-[317px] h-[155px] border-1 border-black border-b-0 relative overflow-hidden shrink-0">
      <h2
        className={`${cherryBombOne.className} text-[92px] absolute leading-none -mt-5 -left-5 opacity-30`}
      >
        2024
      </h2>
      <div className=" flex pt-[14px] gap-[15px] justify-center">
        <WrappedOverviewList />
        <WrappedOverviewList />
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
