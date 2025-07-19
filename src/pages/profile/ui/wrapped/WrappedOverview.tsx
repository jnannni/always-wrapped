"use client";
import WrappedCard from "./WrappedCard";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

export default function WrappedOverview() {
  const { toggle } = useUIStoreContext();
  return (
    <div className="flex flex-col gap-[10px] items-center -mx-[30px] xl:-mx-[80px]">
      <hr className="w-full border-2 border-black" />
      <h3 className="text-[30px] capitalize mt-[11px]">Your wrapped</h3>
      <div className="flex gap-[23px] w-full overflow-scroll">
        <WrappedCard spotifyTimePeriod="short_term" className="bg-darkviolet" />
        <WrappedCard spotifyTimePeriod="medium_term" className="bg-crimson" />
        <WrappedCard spotifyTimePeriod="long_term" className="bg-darkgoldenrod" />
        {toggle === "lastfm" && (
          <>
            <WrappedCard lastfmTimePeriod="7day" className="bg-darkviolet" />
            <WrappedCard lastfmTimePeriod="7day" className="bg-crimson" />
            <WrappedCard lastfmTimePeriod="7day" className="bg-darkgoldenrod" />
          </>
        )}
      </div>
    </div>
  );
}
