import { cherryBombOne } from "../layout";
import WrappedOverviewList from "./WrappedOverviewList";
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
    </div>
  );
}
