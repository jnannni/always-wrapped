"use client";
import WrappedCard from "./WrappedCard";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

export default function WrappedOverview() {
  const { toggle } = useUIStoreContext();
  return (
    <div className="flex flex-col gap-[10px] items-center -mx-[30px] xl:-mx-[80px]">
      <hr className="w-full border-2 border-black" />
      <h3 className="text-[30px] capitalize mt-[11px]">Your wrapped</h3>
      <div className="flex gap-[23px] w-full  overflow-hidden overflow-scroll">
        <WrappedCard
          timePeriod={toggle === "spotify" ? "short_term" : "7day"}
        />
        <WrappedCard
          timePeriod={toggle === "spotify" ? "medium_term" : "1month"}
        />
        <WrappedCard
          timePeriod={toggle === "spotify" ? "long_term" : "3month"}
        />
        {toggle === "lastfm" && (
          <>
            <WrappedCard timePeriod={"6month"} />
            <WrappedCard timePeriod={"12month"} />
            <WrappedCard timePeriod={"overall"} />
          </>
        )}
      </div>
    </div>
  );
}
